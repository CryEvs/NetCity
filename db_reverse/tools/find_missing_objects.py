"""Compare DB objects referenced by SQL in decompiled C# sources with objects that exist in main4.

usage: python find_missing_objects.py <decompiled src dir> <out json>
Needs: pyodbc is NOT required - existing object names are read via sqlcmd-less PowerShell export (objects.txt).
"""
import os, re, sys, json, subprocess
from collections import defaultdict

SRC, OUT = sys.argv[1], sys.argv[2]
EXISTING = set(x.strip().upper() for x in open(sys.argv[3], encoding='utf-8-sig') if x.strip())

str_lit = re.compile(r'@"((?:[^"]|"")*)"|"((?:[^"\\]|\\.)*)"')
ref = re.compile(r'\b(from|join|into|update|delete\s+from|merge\s+into|truncate\s+table|exists\s*\(\s*select\s+1\s+from)\s+(?:dbo\.)?\[?([A-Za-z_][A-Za-z0-9_]*)\]?(\s*\()?', re.I)
KW = set('select from where and or not null in on as join inner left right outer set values into update delete insert exists '
         'with nolock table top case when then else end group order by having union all distinct cross apply'.split())

hits = defaultdict(set)
for dp, _, fns in os.walk(SRC):
    for fn in fns:
        if not fn.endswith('.cs'):
            continue
        p = os.path.join(dp, fn)
        text = open(p, encoding='utf-8-sig', errors='replace').read()
        # join adjacent literals of one statement: good enough to catch FROM/JOIN targets inside a literal
        for m in str_lit.finditer(text):
            s = (m.group(1) or m.group(2) or '').replace('\\r', ' ').replace('\\n', ' ').replace('\\t', ' ')
            if not re.search(r'\b(select|insert|update|delete|merge)\b', s, re.I):
                continue
            ctes = {c.upper() for c in re.findall(r'(?:\bwith|,)\s*([A-Za-z_]\w*)\s*(?:\([^()]*\))?\s+as\s*\(', s, re.I)}
            for r in ref.finditer(s):
                name = r.group(2).upper()
                if name.lower() in KW or name in ctes or len(name) < 3 or name.startswith(('SYS', 'RDB$', 'MON$')):
                    continue
                if s[r.start(2) - 1:r.start(2)] in '#@{':
                    continue
                kind = 'function' if r.group(3) else 'table'
                cls = os.path.relpath(p, SRC).split(os.sep)[0] + '/' + fn[:-3]
                hits[(name, kind)].add(cls)

missing = {f'{n} [{k}]': sorted(v)[:6] for (n, k), v in sorted(hits.items()) if n not in EXISTING}
json.dump(missing, open(OUT, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
print('referenced:', len(hits), 'missing:', len(missing))
for k, v in missing.items():
    print(f'{k:45} {len(v)} users e.g. {v[0]}')
