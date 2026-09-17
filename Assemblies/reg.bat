@echo off

echo IIS stopping...
iisreset /stop

echo Service stopping
sc stop NetCityServices

echo Unregistering Assemblies...
regasm /u /nologo /silent NetCity.Components.dll

regasm /u /nologo /silent NetCity.ReportManager.dll

regasm /u /nologo /silent NS_DAComWrapper.dll

regasm /u /nologo /silent NetCity.Language.dll
gacutil /nologo /u NetCity.Language

regasm /u /nologo /silent NetCity.Common.ObjectModel.dll

regasm /u /nologo /silent NetCity.Common.Legacy.dll

regasm /u /nologo /silent NetCity.Common.dll
gacutil /nologo /u NetCity.Common

regasm /u /nologo /silent NetCity.Integration.LACC.dll

echo Registering Assemblies...
regasm /nologo /silent /codebase /tlb NetCity.Infrastructure.Common.dll
regasm /nologo /silent /codebase /tlb NetCity.Common.dll
regasm /nologo /silent /codebase /tlb NetCity.Common.Legacy.dll
regasm /nologo /silent NetCity.Common.ObjectModel.dll
regasm /nologo /silent /codebase NetCity.Language.dll
regasm /nologo /silent /codebase NS_DAComWrapper.dll
regasm /nologo /silent /codebase NetCity.ReportManager.dll
regasm /nologo /silent /codebase NetCity.Components.dll
regasm /nologo /silent /codebase /tlb NetCity.Integration.LACC.dll

echo Service starting
sc start NetCityServices

echo IIS starting...
iisreset /start
