using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;

class Gen
{
    static string Dir;

    static Type[] SafeTypes(Assembly a)
    {
        try { return a.GetTypes(); }
        catch (ReflectionTypeLoadException e) { return e.Types.Where(t => t != null).ToArray(); }
    }

    static bool IsMap(Type t)
    {
        if (t.IsAbstract || t.ContainsGenericParameters) return false;
        for (var b = t.BaseType; b != null; b = b.BaseType)
            if (b.Namespace != null && b.Namespace.StartsWith("FluentNHibernate") &&
                (b.Name.StartsWith("ClassMap`") || b.Name.StartsWith("SubclassMap`") || b.Name.StartsWith("ComponentMap`")))
                return true;
        return false;
    }

    [STAThread]
    static int Main(string[] args)
    {
        Dir = args[0];
        var outFile = args[1];
        AppDomain.CurrentDomain.AssemblyResolve += (s, e) =>
        {
            var p = Path.Combine(Dir, new AssemblyName(e.Name).Name + ".dll");
            return File.Exists(p) ? Assembly.LoadFrom(p) : null;
        };
        return Run(outFile);
    }

    static int Run(string outFile)
    {
        var mapAsm = new List<Assembly>();
        foreach (var f in Directory.GetFiles(Dir, "*.dll"))
        {
            var n = Path.GetFileName(f);
            if (!(n.StartsWith("NetCity") || n.StartsWith("IRTech"))) continue;
            try
            {
                var a = Assembly.LoadFrom(f);
                var c = SafeTypes(a).Count(IsMap);
                if (c > 0) { Console.WriteLine("{0}: {1} maps", n, c); mapAsm.Add(a); }
            }
            catch (Exception ex) { Console.WriteLine("skip {0}: {1}", n, ex.GetType().Name); }
        }
        RunNh(mapAsm, outFile);
        return 0;
    }

    static void RunNh(List<Assembly> mapAsm, string outFile)
    {
        var db = FluentNHibernate.Cfg.Db.MsSqlConfiguration.MsSql2008
            .ConnectionString("Server=localhost;Database=main4;Integrated Security=true")
            // same as SessionManagementProviderBase.BuildSessionFactory for MSSqlServer
            .Raw("sql_types.keep_datetime", "true");
        var cfg = FluentNHibernate.Cfg.Fluently.Configure()
            .Database(db)
            .Mappings(m =>
            {
                foreach (var a in mapAsm)
                {
                    m.FluentMappings.AddFromAssembly(a);
                    m.HbmMappings.AddFromAssembly(a);
                }
                m.FluentMappings.Conventions.Add(new NetCity.Infrastructure.NHibernate.Conventions.ReferenceConvention(), new NetCity.Infrastructure.NHibernate.Conventions.MSSQLConvention());
            })
            .ExposeConfiguration(c => c.SetProperty("hbm2ddl.keywords", "none"))
            .BuildConfiguration();
        Console.WriteLine("Class mappings: " + cfg.ClassMappings.Count + ", collections: " + cfg.CollectionMappings.Count);

        // Table-per-hierarchy: columns declared only by a subclass are empty for rows of other subclasses,
        // so they must be NULLable in the real database even if the subclass mapping says Not.Nullable().
        var relaxed = new List<string>();
        foreach (var pc in cfg.ClassMappings.OfType<NHibernate.Mapping.SingleTableSubclass>())
        {
            foreach (var p in pc.PropertyClosureIterator)
            {
                if (pc.Superclass != null && pc.Superclass.PropertyClosureIterator.Any(sp => sp.Name == p.Name)) continue;
                foreach (var col in p.ColumnIterator.OfType<NHibernate.Mapping.Column>())
                {
                    if (!col.IsNullable) { col.IsNullable = true; relaxed.Add(pc.Table.Name + "." + col.Name); }
                }
            }
        }
        File.WriteAllLines(Path.Combine(Path.GetTempPath(), "nc_relaxed_columns.txt"), relaxed.Distinct());
        Console.WriteLine("Subclass columns made nullable: " + relaxed.Distinct().Count());

        if (outFile == "--validate")
        {
            try
            {
                new NHibernate.Tool.hbm2ddl.SchemaValidator(cfg).Validate();
                Console.WriteLine("SCHEMA VALID");
            }
            catch (NHibernate.SchemaValidationException ex)
            {
                Console.WriteLine("VALIDATION ERRORS: " + ex.ValidationErrors.Count);
                foreach (var e in ex.ValidationErrors) Console.WriteLine("  " + e);
            }
            return;
        }
        var dialect = NHibernate.Dialect.Dialect.GetDialect(cfg.Properties);
        var script = cfg.GenerateSchemaCreationScript(dialect);
        File.WriteAllText(outFile, string.Join("\r\nGO\r\n\r\n", script) + "\r\nGO\r\n", new System.Text.UTF8Encoding(true));
        Console.WriteLine("Statements: " + script.Length + " -> " + outFile);

        // entity map: Entity \t Class \t Table \t Property \t Columns \t NHType \t Kind
        var map = new System.Text.StringBuilder();
        map.AppendLine("Entity\tClass\tTable\tProperty\tColumns\tType\tKind");
        foreach (var pc in cfg.ClassMappings)
        {
            var tbl = pc.Table != null ? pc.Table.Name : "";
            Action<NHibernate.Mapping.Property, string> add = (p, kind) =>
            {
                string cols = string.Join(",", p.ColumnIterator.OfType<NHibernate.Mapping.Column>().Select(c => c.Name));
                string type = "";
                try { type = p.Type != null ? p.Type.Name : ""; } catch { }
                map.AppendLine(string.Join("\t", pc.EntityName, pc.MappedClass != null ? pc.MappedClass.FullName : "", tbl, p.Name, cols, type, kind));
            };
            if (pc.IdentifierProperty != null) add(pc.IdentifierProperty, "id");
            foreach (var p in pc.PropertyIterator) add(p, p.Value is NHibernate.Mapping.Collection ? "collection" : (p.Value is NHibernate.Mapping.ManyToOne ? "many-to-one" : "property"));
        }
        File.WriteAllText(Path.ChangeExtension(outFile, ".entities.tsv"), map.ToString(), new System.Text.UTF8Encoding(true));
    }
}


