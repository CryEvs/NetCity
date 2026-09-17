using System;
using System.IO;
using System.Linq;
using System.Reflection;

// Loads EducOrganization #id with the application's NHibernate mappings/conventions, applies what
// saveArea.asp does through EditEoInfoWork (clear founders, clear creatives) and flushes inside a
// transaction that is always rolled back. Prints the full exception chain.
class EoFlush
{
    static string Dir;
    static int Main(string[] args)
    {
        Dir = args[0];
        AppDomain.CurrentDomain.AssemblyResolve += (s, e) =>
        {
            var p = Path.Combine(Dir, new AssemblyName(e.Name).Name + ".dll");
            return File.Exists(p) ? Assembly.LoadFrom(p) : null;
        };
        return Run(int.Parse(args[1]));
    }

    static int Run(int eoId)
    {
        var mapAsm = Directory.GetFiles(Dir, "*.dll")
            .Where(f => Path.GetFileName(f).StartsWith("NetCity") || Path.GetFileName(f).StartsWith("IRTech"))
            .Select(f => { try { return Assembly.LoadFrom(f); } catch { return null; } })
            .Where(a => a != null && SafeTypes(a).Any(IsMap)).ToList();
        var db = FluentNHibernate.Cfg.Db.MsSqlConfiguration.MsSql2008
            .ConnectionString("Server=localhost;Database=main4;Integrated Security=true")
            .Raw("sql_types.keep_datetime", "true").ShowSql();
        var sf = FluentNHibernate.Cfg.Fluently.Configure().Database(db)
            .Mappings(m =>
            {
                foreach (var a in mapAsm) m.FluentMappings.AddFromAssembly(a);
                m.FluentMappings.Conventions.Add(new NetCity.Infrastructure.NHibernate.Conventions.ReferenceConvention(),
                                                 new NetCity.Infrastructure.NHibernate.Conventions.MSSQLConvention());
            })
            .BuildSessionFactory();
        using (var session = sf.OpenSession())
        using (var tx = session.BeginTransaction())
        {
            try
            {
                var type = AppDomain.CurrentDomain.GetAssemblies().Select(a => a.GetType("NetCity.Common.ObjectModel.Nhibernate.Organizations.EducOrganization")).First(t => t != null);
                var eo = session.Get(type, eoId);
                Console.WriteLine("loaded: " + (eo != null));
                Dump(eo, "Name"); Dump(eo, "Form"); Dump(eo, "LegalForm"); Dump(eo, "LegalForm83"); Dump(eo, "City"); Dump(eo, "School");
                var founders = type.GetProperty("Founders").GetValue(eo);
                founders.GetType().GetMethod("Clear").Invoke(founders, null);
                Console.WriteLine("founders cleared");
                var creatives = type.GetProperty("Creatives").GetValue(eo);
                creatives.GetType().GetMethod("Clear").Invoke(creatives, null);
                Console.WriteLine("creatives cleared");
                session.Flush();
                Console.WriteLine("FLUSH OK");
            }
            catch (Exception ex)
            {
                for (var e = ex; e != null; e = e.InnerException)
                    Console.WriteLine("EXCEPTION " + e.GetType().FullName + ": " + e.Message);
            }
            finally { tx.Rollback(); Console.WriteLine("rolled back"); }
        }
        return 0;
    }

    static void Dump(object o, string prop)
    {
        try { var v = o.GetType().GetProperty(prop).GetValue(o); Console.WriteLine("  " + prop + " = " + (v == null ? "null" : v.ToString())); }
        catch (Exception ex) { var e = ex.InnerException ?? ex; Console.WriteLine("  " + prop + " -> " + e.GetType().Name + ": " + e.Message); }
    }

    static Type[] SafeTypes(Assembly a)
    {
        try { return a.GetTypes(); } catch (ReflectionTypeLoadException e) { return e.Types.Where(t => t != null).ToArray(); }
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
}
