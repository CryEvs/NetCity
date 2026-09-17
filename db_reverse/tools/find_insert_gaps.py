"""Find NOT NULL columns without DEFAULT that application INSERTs leave out, and propose DEFAULT constraints.

usage: python find_insert_gaps.py <decompiled src dir> <il_sql.tsv> <columns.tsv> <out.sql>
columns.tsv: TABLE \t COLUMN \t TYPE \t IS_NULLABLE \t HAS_DEFAULT \t IS_IDENTITY \t IS_COMPUTED \t IS_PK \t PK_COLS \t TYPE_SQL \t ORDINAL
"""
import os, re, sys
from collections import defaultdict

SRC, IL, COLS, OUT = sys.argv[1:5]

cols = defaultdict(dict)
for line in open(COLS, encoding='utf-8-sig'):
    p = line.rstrip('\n').split('\t')
    if len(p) < 11:
        continue
    cols[p[0].upper()][p[1].upper()] = dict(type=p[2].lower(), nullable=p[3] == '1', default=p[4] == '1',
                                             identity=p[5] == '1', computed=p[6] == '1', pk=p[7] == '1', pkcols=int(p[8]), sqltype=p[9], ordinal=int(p[10]))

inserts = defaultdict(lambda: defaultdict(set))  # table -> frozenset(cols) -> sources

ins_sql = re.compile(r'\binsert\s+into\s+(?:dbo\.)?\[?([A-Za-z_]\w*)\]?\s*\(([^()]{1,3000})\)', re.I)


def add(table, collist, src):
    t = table.upper()
    if t not in cols:
        return
    names = frozenset(c.strip().strip('[]"').upper() for c in collist if c.strip())
    if names and all(re.fullmatch(r'[A-Z_][A-Z0-9_]*', n) for n in names):
        inserts[t][names].add(src)


# 1) SQL text: IL corpus (joined literals) + decompiled string literals
for line in open(IL, encoding='utf-8'):
    parts = line.rstrip('\n').split('\t', 2)
    if len(parts) == 3:
        for m in ins_sql.finditer(parts[2]):
            add(m.group(1), m.group(2).split(','), parts[1])

lit = re.compile(r'"((?:[^"\\]|\\.)*)"')
# 2) Inserter builders: BuildInserter(trans, "TABLE", "IDCOL", new { A = .., B = .. })  /  new Inserter(f, t, "TABLE", "", "", "A, B", ...)
bi = re.compile(r'BuildInserter\(\s*\w+\s*,\s*"(\w+)"\s*,\s*"(\w*)"\s*,\s*new\s*\{', re.S)
bi_str = re.compile(r'BuildInserter\(\s*\w+\s*,\s*"(\w+)"\s*,\s*"(\w*)"\s*,\s*"([^"]*)"\s*,\s*"([^"]*)"', re.S)
new_ins = re.compile(r'new\s+Inserter\([^,]+,[^,]+,\s*"(\w+)"\s*,\s*"(\w*)"\s*,\s*"(\w*)"\s*,\s*"([^"]*)"', re.S)
for dp, _, fns in os.walk(SRC):
    for fn in fns:
        if not fn.endswith('.cs'):
            continue
        text = open(os.path.join(dp, fn), encoding='utf-8-sig', errors='replace').read()
        if 'insert' not in text.lower() and 'Inserter' not in text:
            continue
        src = fn[:-3]
        for m in lit.finditer(text):
            s = m.group(1).replace('\\r', ' ').replace('\\n', ' ').replace('\\t', ' ')
            for mm in ins_sql.finditer(s):
                add(mm.group(1), mm.group(2).split(','), src)
        for m in bi.finditer(text):
            depth, i = 1, m.end()
            while i < len(text) and depth:
                depth += {'{': 1, '}': -1}.get(text[i], 0)
                i += 1
            body = text[m.end():i - 1]
            props = re.findall(r'(?:^|,)\s*(\w+)\s*=', body) + re.findall(r'(?:^|,)\s*(\w+)\s*(?=,|$)', body)
            add(m.group(1), props, src)
        for m in bi_str.finditer(text):
            add(m.group(1), m.group(3).split(','), src)
        for m in new_ins.finditer(text):
            add(m.group(1), m.group(4).split(','), src)


def default_for(t):
    if t in ('int', 'bigint', 'smallint', 'tinyint', 'bit', 'decimal', 'numeric', 'float', 'real', 'money'):
        return '0'
    if t in ('datetime', 'datetime2', 'date', 'smalldatetime', 'datetimeoffset'):
        return 'GETDATE()'
    if t in ('uniqueidentifier',):
        return 'NEWID()'
    if 'char' in t or t in ('text', 'ntext'):
        return "''"
    return None


out = ['/* ============================================================================',
       '   08_insert_defaults.sql',
       '   NOT NULL columns without DEFAULT that the application omits in its own INSERTs',
       '   (legacy SQL / Inserter builders). The original database must have had defaults there.',
       '   VERSION columns (NHibernate optimistic locking) get DEFAULT 1.',
       '   ============================================================================ */', '']
total = 0
identity_tables = {}
for t in sorted(inserts):
    tcols = cols[t]
    gaps = defaultdict(set)
    for names, srcs in inserts[t].items():
        for c, meta in tcols.items():
            if meta['nullable'] or meta['default'] or meta['identity'] or meta['computed'] or c in names:
                continue
            gaps[c] |= srcs
    for c, srcs in sorted(gaps.items()):
        meta = tcols[c]
        if meta['pk'] and meta['pkcols'] == 1 and meta['type'] in ('int', 'bigint'):
            identity_tables[t] = (c, srcs)
            continue
        val = '1' if c == 'VERSION' and meta['type'] in ('int', 'bigint') else default_for(meta['type'])
        if val is None:
            out.append(f'-- SKIP {t}.{c} ({meta["type"]}): no generic default')
            continue
        out.append(f'ALTER TABLE dbo.{t} ADD CONSTRAINT DF_{t}_{c} DEFAULT ({val}) FOR [{c}];  -- omitted by: {", ".join(sorted(srcs)[:3])}\nGO')
        total += 1
# every NHibernate version column
for t, tc in sorted(cols.items()):
    if 'VERSION' in tc and not tc['VERSION']['nullable'] and not tc['VERSION']['default'] and tc['VERSION']['type'] in ('int', 'bigint'):
        line = f'ALTER TABLE dbo.{t} ADD CONSTRAINT DF_{t}_VERSION DEFAULT (1) FOR [VERSION];'
        if not any(l.startswith(line[:-1]) for l in out):
            out.append(line + '  -- NHibernate version column\nGO')
            total += 1
open(OUT, 'w', encoding='utf-8-sig').write('\n'.join(out) + '\n')
print('tables with inserts:', len(inserts), 'defaults proposed:', total)

# single-column INT primary keys that inserts never supply -> they were IDENTITY in the original DB.
# SQL Server cannot ALTER a column to IDENTITY, so rebuild the (still empty) table.
if identity_tables:
    out.append('')
    out.append('/* ---- primary keys generated by the database (IDENTITY) ---- */')
for t, (pkcol, srcs) in sorted(identity_tables.items()):
    defs = []
    for c, meta in sorted(cols[t].items(), key=lambda kv: kv[1]['ordinal']):
        d = f'[{c}] {meta["sqltype"]}'
        if c == pkcol:
            d += ' IDENTITY(1,1) NOT NULL'
        else:
            d += ' NULL' if meta['nullable'] else ' NOT NULL'
        defs.append(d)
    out.append(f'-- {t}.{pkcol} omitted by: {", ".join(sorted(srcs)[:3])}')
    out.append(f"IF NOT EXISTS (SELECT 1 FROM dbo.{t}) AND COLUMNPROPERTY(OBJECT_ID('dbo.{t}'), '{pkcol}', 'IsIdentity') = 0\nBEGIN\n"
               f"    DECLARE @pk_{t} sysname = (SELECT name FROM sys.key_constraints WHERE parent_object_id = OBJECT_ID('dbo.{t}') AND type = 'PK');\n"
               f"    DROP TABLE dbo.{t};\n"
               f"    CREATE TABLE dbo.{t} (\n        " + ',\n        '.join(defs) + f",\n        CONSTRAINT PK_{t} PRIMARY KEY ([{pkcol}])\n    );\nEND;\nGO")
    total += 1
open(OUT, 'w', encoding='utf-8-sig').write('\n'.join(out) + '\n')
print('identity rebuilds:', len(identity_tables))

