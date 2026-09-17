Sub RegisterComponents()
	'Core components
	Call obComponentMgr.RunInstaller("NetCity.Common.Legacy.LegacyInfrastructureInstaller")
	Call obComponentMgr.RunInstaller("NetCity.Components.Infrastructure.WebSession.WebInfrastructureInstaller")
	Call obComponentMgr.RunInstaller("NetCity.Components.Menu.MenuComponentsInstaller")
	Call obComponentMgr.RunInstaller("NetCity.Security.Implement.SecurityComponentsInstaller")
	Call obComponentMgr.Register("NetCity.Common.Events.Handlers.IEventHandler`1[NetCity.Common.Events.Data.Global.AppStart]","NetCity.Components.EventHandlers.AppEventsHandler")
	Call obComponentMgr.RegisterInstance("NetCity.Common.Components.Abstraction.ITokenManagerComponent", obTokenMgr)
	Call obComponentMgr.RegisterInstance("NetCity.Common.Components.Abstraction.ILanguageManager", obLanguage)

	'DAL components
	Call obComponentMgr.RunInstaller("NetCity.DataAccess.Common.Helpers.DAOInstaller")
	Call obComponentMgr.RunInstaller("NetCity.Components.Services.NetCitySessionProviderInstaller")
	Call obComponentMgr.Register("NetCity.Common.Events.Handlers.IEventHandler`1[NetCity.Common.Events.Data.Global.PageEnd]","NetCity.Infrastructure.NHibernate.Http.SessionManagementModule")
	Call obComponentMgr.Register("NS_DAComWrapper.ICOMDataAccess","NS_DAComWrapper.COMDataAccess", "work")
	Call obComponentMgr.Register("NS_DAComWrapper.ICOMDataAccess","NS_DAComWrapper.COMDataAccess", "arch")
	
	'Event listners
	Call obComponentMgr.RunInstaller("NetCity.Components.EventHandlers.LogPageEventsInstaller")
	Call obComponentMgr.Register("NetCity.Common.Events.Handlers.IEventHandler`1[NetCity.Common.Events.Data.Global.PageStart]","NetCity.Components.EventHandlers.HostCounterPageEventListener")
	Call obComponentMgr.RunInstaller("NetCity.Components.EventHandlers.UserInfoChangesEventsInstaller")
	Call obComponentMgr.RunInstaller("NetCity.Components.EventHandlers.IndividualEducFormChangesInstaller")
	Call obComponentMgr.RunInstaller("NetCity.Components.EventHandlers.JournalAccessEventsInstaller")
	'Call obComponentMgr.RunInstaller("NetCity.Components.EventHandlers.SmsNotificationEventsInstaller")
	Call obComponentMgr.RunInstaller("NetCity.Components.EventHandlers.SchoolInfoChangesEventsInstaller")

	'Infrastracture components	
	Call obComponentMgr.RegisterPerAspWebRequest("NetCity.Components.Abstraction.Services.IEarlyAccessService", "NetCity.Components.Services.EarlyAccess.EarlyAccessService")
	Call obComponentMgr.RegisterPerAspWebRequest("NetCity.Components.Abstraction.IImportComponent","NetCity.Components.COM.ImportComponent")
	Call obComponentMgr.RegisterPerAspWebRequest("NetCity.Common.Components.Abstraction.IDownloadComponent","NetCity.Components.COM.DownloadComponent")
	Call obComponentMgr.RegisterPerAspWebRequest("NetCity.Common.Components.Abstraction.IFileSystemComponent","NetCity.Components.COM.FileSystemComponent")
	Call obComponentMgr.RegisterPerCall("NetCity.Common.Components.Abstraction.ICacheComponent", "NetCity.Components.COM.RedisCacheComponent")
	Call obComponentMgr.Register("NetCity.Infrastructure.Common.Components.ITempFileProvider", "NetCity.Components.Infrastructure.Mongo.MongoTempFileProvider")
	Call obComponentMgr.Register("NetCity.Common.Components.Abstraction.ITemplateEngine", "NetCity.Components.Views.RazorCoreTemplateEngine")
	Call obComponentMgr.RegisterPerAspWebRequest("NetCity.Components.Abstraction.IHeavySessionsComponent", "NetCity.Components.COM.HeavySessionsComponent")
	Call obComponentMgr.RegisterPerAspWebRequest("NetCity.Components.Abstraction.IQueueComponent", "NetCity.Components.Services.Queue.QueueComponent")
	Call obComponentMgr.RunInstaller("NetCity.Components.Services.Queue.QueueComponentsInstaller")
	Call obComponentMgr.RunInstaller("NetCity.Common.Components.Installers.FilterPanelInitializerInstaller")
	Call obComponentMgr.RunInstaller("NetCity.Components.Infrastructure.RedisConnectionInstaller")
	Call obComponentMgr.RunInstaller("NetCity.Components.Infrastructure.Mongo.MongoConnectionInstaller")
	Call obComponentMgr.RunInstaller("NetCity.Components.Infrastructure.PubSubInstaller")
	Call obComponentMgr.RunInstaller("NetCity.Components.AccessLog.Repositories.Common.AccessLogRepositoryInstaller")

	'BL Components
	Call obComponentMgr.RunInstaller("NetCity.Common.Components.Installers.DocumentValidatorInstaller")
	Call obComponentMgr.RunInstaller("NetCity.Mapping.Configuration.AutoMapperInstaller")
	Call obComponentMgr.RunInstaller("NetCity.Components.Movement.Enrollment.Sources.MovementSourcesInstaller")
	Call obComponentMgr.RunInstaller("NetCity.Components.Services.CommandsInstaller")
	Call obComponentMgr.RunInstaller("NetCity.Components.Services.Journal.ClassJournalInstaller")
	Call obComponentMgr.RunInstaller("NetCity.Components.Services.Users.UsersServicesInstaller")
	Call obComponentMgr.RunInstaller("NetCity.Components.Services.Classmanagement.ClassManagementServicesInstaller")
	Call obComponentMgr.RunInstaller("NetCity.Components.Services.Infrastructure.ServerSettingsInstaller")
	Call obComponentMgr.RunInstaller("NetCity.Components.Services.Infrastructure.UploadLimitsInstaller")

	Call obComponentMgr.RegisterPerAspWebRequest("NetCity.Common.Components.Abstraction.IFileAttachmentsComponent","NetCity.Components.COM.FileAttachmentsComponent")
	Call obComponentMgr.RegisterPerAspWebRequest("NetCity.Components.Abstraction.IUserSettingsComponent","NetCity.Components.COM.UserSettingsComponent")
	Call obComponentMgr.RegisterPerAspWebRequest("NetCity.Common.Components.Abstraction.IServerSettingsComponent","NetCity.Components.COM.ServerSettingsComponent")
	Call obComponentMgr.RegisterPerAspWebRequest("NetCity.Components.Abstraction.ILaComponent","NetCity.Components.LaComponent")
	Call obComponentMgr.Register("NetCity.Common.Components.Abstraction.IContextComponent", "NetCity.Components.COM.ContextComponent")
	Call obComponentMgr.RegisterPerAspWebRequest("NetCity.Components.Abstraction.ISchoolYearComponent", "NetCity.Components.COM.SchoolYearComponent")
	Call obComponentMgr.RegisterPerAspWebRequest("NetCity.Common.Components.Abstraction.ISchoolComponent", "NetCity.Components.SchoolComponent")
	Call obComponentMgr.RegisterPerAspWebRequest("NetCity.Common.Components.Abstraction.IStatFormComponent", "NetCity.Integration.StatFormsModule.Services.StatFormComponent")
	Call obComponentMgr.RegisterPerAspWebRequest("NetCity.Components.Abstraction.IAddressRefComponent", "NetCity.Components.AddressRefComponent")
	'Call obComponentMgr.RegisterPerAspWebRequest("NetCity.Common.Components.Abstraction.IMorfComponent", "NetCity.Components.Morf.MorfComponent")
	Call obComponentMgr.RegisterPerAspWebRequest("NetCity.WebServices.RegionServices.Contracts.IRegionMail", "NetCity.WebServices.RegionServices.Clients.COM.RegionMailClient")
	Call obComponentMgr.RegisterPerAspWebRequest("NetCity.Components.Abstraction.IUserParameterValueComponent", "NetCity.Components.COM.UserParameterValueComponent")
	Call obComponentMgr.RegisterPerAspWebRequest("NetCity.Components.Abstraction.IMovementComponent", "NetCity.Components.Movement.MovementComponent")
	Call obComponentMgr.RegisterPerAspWebRequest("NetCity.Components.Abstraction.IUserClonesComponent", "NetCity.Components.UserClonesComponent")
	Call obComponentMgr.RegisterPerAspWebRequest("NetCity.Components.Abstraction.IMarkComponent", "NetCity.Components.MarkComponent")
	Call obComponentMgr.RegisterPerAspWebRequest("NetCity.Common.Components.Abstraction.IGradingComponent", "NetCity.Components.GradingComponent")
	Call obComponentMgr.RegisterPerAspWebRequest("NetCity.Components.Abstraction.IIntegrationNDComponent", "NetCity.Components.IntegrationNDComponent")
	Call obComponentMgr.RegisterPerAspWebRequest("NetCity.Common.Components.Abstraction.IGiaComponent", "NetCity.Components.EGE.GiaComponent")
	Call obComponentMgr.RegisterPerAspWebRequest("NetCity.Common.Components.Abstraction.ISmsComponent", "NetCity.Components.Sms.SmsComponent")
	Call obComponentMgr.RegisterPerAspWebRequest("NetCity.Common.Components.Abstraction.IQualityAssessmentComponent", "NetCity.Components.QualityAssessmentComponent")
	Call obComponentMgr.RegisterPerAspWebRequest("NetCity.Common.Components.Abstraction.IGradeComponent", "NetCity.Components.GradeComponent")
	Call obComponentMgr.RegisterPerAspWebRequest("NetCity.Components.Abstraction.IClassMeetingComponent", "NetCity.Components.COM.ClassMeetingComponent")
	Call obComponentMgr.RegisterPerAspWebRequest("NetCity.Components.Abstraction.IYaClassComponent", "NetCity.Components.YaClassComponent")
	Call obComponentMgr.RegisterPerAspWebRequest("NetCity.Components.Abstraction.IIntegrationComponent", "NetCity.Components.IntegrationComponent")
	Call obComponentMgr.RegisterPerAspWebRequest("NetCity.Common.Components.Abstraction.IReportsComponent", "NetCity.Reports.ReportsComponent")
	Call obComponentMgr.RegisterPerAspWebRequest("NetCity.Components.Abstraction.IUserStatComponent", "NetCity.Components.UserStatComponent")
	Call obComponentMgr.RegisterPerAspWebRequest("NetCity.Components.Movement.Enrollment.Sources.Infrastructure.QAdd.IQAddComponent", "NetCity.Components.Movement.Enrollment.Sources.Infrastructure.QAdd.QAddComponent")
	Call obComponentMgr.RegisterPerAspWebRequest("NetCity.Common.Components.Abstraction.IReferencesComponentCOM", "NetCity.Components.COM.ReferencesComponent", "local")
	Call obComponentMgr.RegisterPerAspWebRequest("NetCity.Common.Components.Abstraction.IReferencesComponentCOM", "NetCity.Components.COM.WCFReferencesComponent", "remote")
	Call obComponentMgr.RegisterPerAspWebRequest("NetCity.Components.Abstraction.IReportManagerComponent", "NetCity.ReportManager.ReportManagerComponent")
	Call obComponentMgr.RegisterPerAspWebRequest("NetCity.Components.Abstraction.INoContingentInfoComponent","NetCity.Components.COM.NoContingentInfoComponent")
	
	'Integration components
	If bInformContingent Then
		Call obComponentMgr.RunInstaller("NetCity.Integration.Contingent.EventHandlers.EventHandlerInstaller")
	End If

	comHelper.InitModules()
End Sub

Sub InitConstants()
	<!--Константа используется для вычесления используемого века (19<расчитаный год> .. 20<расчитаный год>)-->
	Application("YEARLIMITEDAGE") = Year(Now) - 1985

	obTokenMgr.Application()("DISABLE_HEALTH_DATA") = bDisableHealthData '#13625
	obTokenMgr.Application()("ECARD_AUTHENTICATION") = bECardAuthentication
	obTokenMgr.Application()("NS_PRODUCT_NAME") = Application("NS_PRODUCT_NAME")
	obTokenMgr.Application()("EToken_Authentication") = bETokenAuthentication
	obTokenMgr.Application()("MODULE_KPM") = MODULE_KPM

	obTokenMgr.Application()("LA_INAGRATION_NEWDISK") = kLAIntegrationNewDisk

	' obTokenMgr.Application()(comHelper.AspHelper.GetIsolatedKey("PERSON_DATA", False, True, False)) = PERSON_DATA
	<!-- Здесь значение признака усеченного сайта кладется по временному ключу, дальше на сервере он уточнятся в соответствии с хостнеймом -->
	Application("PERSON_DATA") = PERSON_DATA

	obTokenMgr.Application()("SERVER_HOSTNAME") = Application("SERVER_HOSTNAME")
	obTokenMgr.Application()("REPORT_TITLE") = REPORT_TITLE
	obTokenMgr.Application()("ADMIN_NAME") = ADMIN_NAME
	obTokenMgr.Application()("kIsTKR") = kIsTKR
	obTokenMgr.Application()("bExtendedEMForSchoolAccess") = bExtendedEMForSchoolAccess
	obTokenMgr.Application()("kRNTimeOfEntryAndExit") = kRNTimeOfEntryAndExit
	obTokenMgr.Application()("kRawDeleteSchool") = kRawDeleteSchool
	obTokenMgr.Application()("bEditReferences") = bEditReferences

	'Смс-инфомирование о выставлении пропусков
	obTokenMgr.Application()("kSmsInformingPassNomination") = kSmsInformingPassNomination

	' Стартовая страница
	obTokenMgr.Application()("kStartPage") = kStartPage

	obTokenMgr.Application()("kDeleteUsersLimit") = kDeleteUsersLimit
	obTokenMgr.Application()("kDeleteUsersPackageSize") = kDeleteUsersPackageSize

	obTokenMgr.Application()("bUseReadOnlyAccess") = bUseReadOnlyAccess
End Sub