using System;
using System.IO;
using System.Linq;
using System.Reflection;

// Validates main4 with exactly the mappings the application uses:
// ModulesManager.Init() + NetCityMappingsProvider + app conventions (ReferenceConvention, MSSQLConvention).
class AppValidate
{
    static int Main(string[] args)
    {
        string dir = Path.GetDirectoryName(typeof(AppValidate).Assembly.Location);
        AppDomain.CurrentDomain.AssemblyResolve += (s, e) =>
        {
            var p = Path.Combine(dir, new AssemblyName(e.Name).Name + ".dll");
            return File.Exists(p) ? Assembly.LoadFrom(p) : null;
        };
        return Run();
    }

    static int Run()
    {
        // same as NetCity.ServicesHost InitConfiguration(): ConfigurationInitializer().Execute(<Assemblies dir>)
        string dir = Path.GetDirectoryName(typeof(AppValidate).Assembly.Location);
        var comp = Assembly.LoadFrom(Path.Combine(dir, "NetCity.Components.dll"));
        var initType = comp.GetType("NetCity.Components.Services.Infrastructure.ConfigurationInitializer", true);
        initType.GetMethod("Execute").Invoke(Activator.CreateInstance(initType), new object[] { dir, "netcity2" });
        Console.WriteLine("installation path: " + NetCity.Infrastructure.Common.Configuration.Configuration.Instance.InstallationPath);
        try { NetCity.Common.Configuration.Modules.ModulesManager.Init(); }
        catch (Exception ex) { Console.WriteLine("ModulesManager.Init failed: " + ex.Message); }
        var field = typeof(NetCity.Common.Configuration.Modules.ModulesManager).GetField("_modules", BindingFlags.NonPublic | BindingFlags.Static);
        var modules = (NetCity.Common.Configuration.Modules.IModule[])field.GetValue(null) ?? new NetCity.Common.Configuration.Modules.IModule[0];
        Console.WriteLine("modules (all discovered): " + modules.Length + " -> " + string.Join(", ", modules.Select(m => m.Name)));

        // NetCityMappingsProvider = mappings of NetCity.NHibernate.Mapping + GetEntityMappings() of enabled modules
        var baseMappings = typeof(NetCity.NHibernate.Mapping.NetCityMappingsProvider).Assembly.GetTypes()
            .Where(x => x.IsClass && !x.IsAbstract && !x.IsGenericType &&
                        (typeof(FluentNHibernate.IMappingProvider).IsAssignableFrom(x) ||
                         typeof(FluentNHibernate.Mapping.Providers.IIndeterminateSubclassMappingProvider).IsAssignableFrom(x) ||
                         typeof(FluentNHibernate.Mapping.Providers.IExternalComponentMappingProvider).IsAssignableFrom(x) ||
                         typeof(FluentNHibernate.Mapping.IFilterDefinition).IsAssignableFrom(x)))
            .ToList();
        foreach (var m in modules)
        {
            try
            {
                var em = m.GetEntityMappings().ToArray();
                if (em.Length > 0) Console.WriteLine("module " + m.Name + ": " + em.Length + " mappings");
                baseMappings.AddRange(em);
            }
            catch (Exception ex) { Console.WriteLine("module " + m.Name + " GetEntityMappings failed: " + ex.Message); }
        }
        var mappings = baseMappings.Distinct().ToArray();
        Console.WriteLine("mapping types: " + mappings.Length);
        var connString = NetCity.Infrastructure.Common.Configuration.Configuration.Instance.DbConfiguration.WorkConnection;

        var db = FluentNHibernate.Cfg.Db.MsSqlConfiguration.MsSql2008.ConnectionString(connString);
        var cfg = FluentNHibernate.Cfg.Fluently.Configure().Database(db)
            .Mappings(m =>
            {
                foreach (var t in mappings) m.FluentMappings.Add(t);
                m.FluentMappings.Conventions.Add(new NetCity.Infrastructure.NHibernate.Conventions.ReferenceConvention(),
                                                 new NetCity.Infrastructure.NHibernate.Conventions.MSSQLConvention());
            })
            .BuildConfiguration();
        Console.WriteLine("class mappings: " + cfg.ClassMappings.Count);
        foreach (var pc in cfg.ClassMappings.OrderBy(x => x.Table.Name))
            Console.WriteLine("TABLE\t" + pc.Table.Name + "\t" + pc.MappedClass.Assembly.GetName().Name);
        try
        {
            new NHibernate.Tool.hbm2ddl.SchemaValidator(cfg).Validate();
            Console.WriteLine("SCHEMA VALID");
        }
        catch (NHibernate.SchemaValidationException ex)
        {
            Console.WriteLine("VALIDATION ERRORS: " + ex.ValidationErrors.Count);
            foreach (var e in ex.ValidationErrors) Console.WriteLine("ERR\t" + e);
        }
        var dialect = NHibernate.Dialect.Dialect.GetDialect(cfg.Properties);
        File.WriteAllText(Path.Combine(Path.GetTempPath(), "nc_app_schema.sql"),
            string.Join("\r\nGO\r\n", cfg.GenerateSchemaCreationScript(dialect)) + "\r\nGO\r\n");
        return 0;
    }
}
