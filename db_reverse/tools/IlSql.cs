using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Reflection.Emit;
using System.Text;
using System.Text.RegularExpressions;

// Walks IL of every method in product assemblies, joins ldstr literals per method,
// and writes those that look like SQL to a tab-separated file: assembly \t type::method \t sql
class IlSql
{
    static readonly Regex Hint = new Regex(@"\b(select\b.*\bfrom|insert\s+into|update\s+\S+\s+set|delete\s+from|exec(ute)?\s|merge\s+into|with\s+\w+\s+as\s*\()", RegexOptions.IgnoreCase | RegexOptions.Singleline);
    static OpCode[] One = new OpCode[0x100], Two = new OpCode[0x100];

    static void Main(string[] args)
    {
        foreach (var f in typeof(OpCodes).GetFields(BindingFlags.Public | BindingFlags.Static))
        {
            var op = (OpCode)f.GetValue(null);
            var v = (ushort)op.Value;
            if (v < 0x100) One[v] = op; else if ((v & 0xff00) == 0xfe00) Two[v & 0xff] = op;
        }
        var roots = args.Take(args.Length - 1).ToArray();
        var outFile = args.Last();
        // pick one file per assembly name (the largest)
        var files = roots.SelectMany(r => Directory.GetFiles(r, "*.*", SearchOption.AllDirectories))
            .Where(p => p.EndsWith(".dll", StringComparison.OrdinalIgnoreCase) || p.EndsWith(".exe", StringComparison.OrdinalIgnoreCase))
            .Where(p => Regex.IsMatch(Path.GetFileName(p), "^(NetCity|IRTech|NS_)", RegexOptions.IgnoreCase))
            .GroupBy(p => Path.GetFileName(p).ToLowerInvariant())
            .Select(g => g.OrderByDescending(p => new FileInfo(p).Length).First())
            .ToList();

        AppDomain.CurrentDomain.ReflectionOnlyAssemblyResolve += (s, e) =>
        {
            try { return Assembly.ReflectionOnlyLoad(e.Name); } catch { }
            var name = new AssemblyName(e.Name).Name + ".dll";
            var hit = files.FirstOrDefault(p => Path.GetFileName(p).Equals(name, StringComparison.OrdinalIgnoreCase));
            if (hit == null) foreach (var r in roots) { var c = Path.Combine(r, "Assemblies", name); if (File.Exists(c)) { hit = c; break; } }
            return hit != null ? Assembly.ReflectionOnlyLoadFrom(hit) : null;
        };

        int total = 0;
        using (var w = new StreamWriter(outFile, false, new UTF8Encoding(false)))
        {
            foreach (var p in files)
            {
                Assembly a;
                try { a = Assembly.ReflectionOnlyLoadFrom(p); } catch { continue; }
                Type[] types;
                try { types = a.GetTypes(); } catch (ReflectionTypeLoadException ex) { types = ex.Types.Where(t => t != null).ToArray(); }
                catch { continue; }
                int n = 0;
                foreach (var t in types)
                {
                    MethodBase[] ms;
                    try
                    {
                        var bf = BindingFlags.DeclaredOnly | BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.Instance | BindingFlags.Static;
                        ms = t.GetMethods(bf).Cast<MethodBase>().Concat(t.GetConstructors(bf)).ToArray();
                    }
                    catch { continue; }
                    foreach (var m in ms)
                    {
                        byte[] il;
                        try { var b = m.GetMethodBody(); if (b == null) continue; il = b.GetILAsByteArray(); } catch { continue; }
                        var sb = new StringBuilder();
                        try { Walk(m.Module, il, sb); } catch { }
                        if (sb.Length < 15) continue;
                        var s = sb.ToString();
                        if (!Hint.IsMatch(s)) continue;
                        string tn = t.FullName;
                        w.WriteLine(Path.GetFileName(p) + "\t" + tn + "::" + m.Name + "\t" + s.Replace("\t", " ").Replace("\r", " ").Replace("\n", " "));
                        n++;
                    }
                }
                if (n > 0) Console.WriteLine("{0}: {1} methods with SQL", Path.GetFileName(p), n);
                total += n;
            }
        }
        Console.WriteLine("total: " + total);
    }

    static void Walk(Module mod, byte[] il, StringBuilder sb)
    {
        int i = 0;
        while (i < il.Length)
        {
            OpCode op;
            byte b = il[i++];
            if (b == 0xfe) op = Two[il[i++]]; else op = One[b];
            if (op.Size == 0) return;
            if (op == OpCodes.Ldstr)
            {
                int tok = BitConverter.ToInt32(il, i);
                var s = mod.ResolveString(tok);
                if (sb.Length > 0) sb.Append(' ');
                sb.Append(s);
            }
            switch (op.OperandType)
            {
                case OperandType.InlineNone: break;
                case OperandType.ShortInlineBrTarget:
                case OperandType.ShortInlineI:
                case OperandType.ShortInlineVar: i += 1; break;
                case OperandType.InlineVar: i += 2; break;
                case OperandType.InlineI8:
                case OperandType.InlineR: i += 8; break;
                case OperandType.InlineSwitch: int c = BitConverter.ToInt32(il, i); i += 4 + 4 * c; break;
                default: i += 4; break;
            }
        }
    }
}
