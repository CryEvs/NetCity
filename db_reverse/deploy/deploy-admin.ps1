# Локальное развёртывание "Сетевой Город. Образование" для проверки.
# Запускать в PowerShell ОТ ИМЕНИ АДМИНИСТРАТОРА:
#   powershell -ExecutionPolicy Bypass -File db_reverse\deploy\deploy-admin.ps1
# Скрипт повторяемый: его можно запускать несколько раз.

$ErrorActionPreference = 'Stop'
$root = (Resolve-Path "$PSScriptRoot\..\..").Path          # папка nc-sgo (аналог C:\Program Files\NetCity2)
$pool = 'NetCity'
$site = 'NetCity'
$port = 8080
$log  = Join-Path $PSScriptRoot 'deploy-admin.log'
Start-Transcript -Path $log -Force | Out-Null

function Step($t) { Write-Host "`n=== $t" -ForegroundColor Cyan }

# Native tools write warnings to stderr; in PS 5.1 with ErrorActionPreference=Stop that aborts the script.
# Run them through cmd so stderr is merged into plain text, and judge success by exit code only.
function Invoke-Native([string]$exe, [string[]]$arguments) {
    $line = '"' + $exe + '" ' + (($arguments | ForEach-Object { if ($_ -match '\s') { '"' + $_ + '"' } else { $_ } }) -join ' ')
    $out = cmd.exe /c "$line 2>&1"
    [pscustomobject]@{ ExitCode = $LASTEXITCODE; Output = ($out -join "`n") }
}

$isAdmin = ([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)
if (-not $isAdmin) { throw 'Запустите PowerShell от имени администратора.' }

Step '1. Компоненты IIS (Classic ASP, ASP.NET 4.8, ISAPI, Windows Auth)'
$features = 'IIS-WebServerRole','IIS-WebServer','IIS-ASP','IIS-ASPNET45','IIS-NetFxExtensibility45','IIS-ISAPIExtensions',
            'IIS-ISAPIFilter','IIS-StaticContent','IIS-DefaultDocument','IIS-HttpErrors','IIS-HttpCompressionStatic',
            'IIS-WindowsAuthentication','IIS-ManagementConsole','IIS-RequestFiltering','IIS-HttpLogging'
$missing = $features | Where-Object { (Get-WindowsOptionalFeature -Online -FeatureName $_).State -ne 'Enabled' }
if ($missing) {
    $r = Enable-WindowsOptionalFeature -Online -All -NoRestart -FeatureName $missing
    if ($r.RestartNeeded) { Write-Warning 'Нужна перезагрузка. Перезагрузитесь и запустите скрипт ещё раз.'; Stop-Transcript; exit 1 }
} else { 'уже установлены' }

Step '2. URL Rewrite'
if (-not (Test-Path "$env:windir\system32\inetsrv\rewrite.dll")) {
    Write-Warning 'IIS URL Rewrite 2.1 не установлен. Установите его (теперь, когда IIS есть, установщик пройдёт) и запустите скрипт ещё раз.'
    Stop-Transcript; exit 1
} else { 'установлен' }

Import-Module WebAdministration
$appcmd = "$env:windir\system32\inetsrv\appcmd.exe"

Step '3. Регистрация COM-компонентов (Assemblies\reg.bat, 64-bit regasm)'
$regasm = "$env:windir\Microsoft.NET\Framework64\v4.0.30319\RegAsm.exe"
Push-Location "$root\Assemblies"
try {
    foreach ($a in 'NetCity.Components.dll','NetCity.ReportManager.dll','NS_DAComWrapper.dll','NetCity.Language.dll',
                   'NetCity.Common.ObjectModel.dll','NetCity.Common.Legacy.dll','NetCity.Common.dll','NetCity.Integration.LACC.dll') {
        Invoke-Native $regasm @('/u', '/nologo', '/silent', $a) | Out-Null
    }
    $reg = @(
        @('NetCity.Infrastructure.Common.dll','/codebase','/tlb'),
        @('NetCity.Common.dll','/codebase','/tlb'),
        @('NetCity.Common.Legacy.dll','/codebase','/tlb'),
        @('NetCity.Common.ObjectModel.dll'),
        @('NetCity.Language.dll','/codebase'),
        @('NS_DAComWrapper.dll','/codebase'),
        @('NetCity.ReportManager.dll','/codebase'),
        @('NetCity.Components.dll','/codebase'),
        @('NetCity.Integration.LACC.dll','/codebase','/tlb')
    )
    foreach ($r in $reg) {
        $res = Invoke-Native $regasm (@('/nologo') + $r)
        if ($res.ExitCode -ne 0) { Write-Warning "regasm $($r[0]) (код $($res.ExitCode)): $($res.Output)" }
        elseif ($res.Output -match 'RA0000') { "OK  $($r[0])  (предупреждение RA0000 о неподписанной сборке - это нормально)" }
        else { "OK  $($r[0])" }
    }
} finally { Pop-Location }

Step '4. Права на папку для IIS'
Invoke-Native "$env:windir\system32\icacls.exe" @($root, '/grant', 'IIS_IUSRS:(OI)(CI)M', '/T', '/C', '/Q') | Out-Null
Invoke-Native "$env:windir\system32\icacls.exe" @($root, '/grant', 'IUSR:(OI)(CI)RX', '/T', '/C', '/Q') | Out-Null
'IIS_IUSRS: modify, IUSR: read'

Step "5. Пул приложений '$pool' и сайт '$site' на порту $port"
if (-not (Test-Path "IIS:\AppPools\$pool")) { New-WebAppPool -Name $pool | Out-Null }
Set-ItemProperty "IIS:\AppPools\$pool" -Name managedRuntimeVersion -Value 'v4.0'
Set-ItemProperty "IIS:\AppPools\$pool" -Name managedPipelineMode -Value 0          # Integrated
Set-ItemProperty "IIS:\AppPools\$pool" -Name enable32BitAppOnWin64 -Value $false
Set-ItemProperty "IIS:\AppPools\$pool" -Name processModel.identityType -Value 4    # ApplicationPoolIdentity
Set-ItemProperty "IIS:\AppPools\$pool" -Name processModel.loadUserProfile -Value $true

if (-not (Test-Path "IIS:\Sites\$site")) {
    New-Website -Name $site -Port $port -PhysicalPath "$root\Web" -ApplicationPool $pool | Out-Null
} else {
    Set-ItemProperty "IIS:\Sites\$site" -Name physicalPath -Value "$root\Web"
    Set-ItemProperty "IIS:\Sites\$site" -Name applicationPool -Value $pool
}
# Classic ASP (COM components loaded into the default AppDomain from Assemblies\) must not share a
# worker process with the ASP.NET applications that carry their own copies of the same assemblies in bin\:
# otherwise Assembly.LoadFrom in global.asa fails with 0x8000FFFF (E_UNEXPECTED).
$apiPool = 'NetCityApi'
if (-not (Test-Path "IIS:\AppPools\$apiPool")) { New-WebAppPool -Name $apiPool | Out-Null }
Set-ItemProperty "IIS:\AppPools\$apiPool" -Name managedRuntimeVersion -Value 'v4.0'
Set-ItemProperty "IIS:\AppPools\$apiPool" -Name managedPipelineMode -Value 0
Set-ItemProperty "IIS:\AppPools\$apiPool" -Name enable32BitAppOnWin64 -Value $false
Set-ItemProperty "IIS:\AppPools\$apiPool" -Name processModel.identityType -Value 4
Set-ItemProperty "IIS:\AppPools\$apiPool" -Name processModel.loadUserProfile -Value $true
foreach ($app in @(@{ Name = 'webapi'; Path = "$root\WebApi" }, @{ Name = 'ws'; Path = "$root\WebServices" }, @{ Name = 'api/v2'; Path = "$root\Web\api\v2" })) {
    if (-not (Get-WebApplication -Site $site -Name $app.Name)) {
        New-WebApplication -Site $site -Name $app.Name -PhysicalPath $app.Path -ApplicationPool $apiPool | Out-Null
    } else {
        Set-ItemProperty "IIS:\Sites\$site\$($app.Name)" -Name applicationPool -Value $apiPool
    }
    "app /$($app.Name) -> $($app.Path)  (пул $apiPool)"
}
"сайт / (Classic ASP) -> пул $pool"

Step '6. Настройки Classic ASP'
foreach ($a in @(
    @('unlock', 'config', '-section:system.webServer/asp'),
    @('set', 'config', $site, '-section:system.webServer/asp', '/enableParentPaths:true', '/scriptErrorSentToBrowser:true', '/appAllowDebugging:false', '/commit:apphost'),
    @('set', 'config', $site, '-section:system.webServer/asp', '/limits.scriptTimeout:00:05:00', '/session.allowSessionState:true', '/commit:apphost'),
    @('set', 'config', $site, '-section:system.webServer/asp', '/codePage:1251', '/lcid:1049', '/commit:apphost'),
    # Classic ASP impersonates the anonymous user (IUSR by default). The very first Assembly.LoadFrom in
    # global.asa then fails with 0x8000FFFF (E_UNEXPECTED) for a path inside a user profile, so run
    # anonymous requests as the application pool identity (userName="" = pool identity).
    @('set', 'config', $site, '-section:system.webServer/security/authentication/anonymousAuthentication', '/enabled:true', '/userName:', '/commit:apphost'),
    @('unlock', 'config', '-section:system.webServer/handlers'),
    @('unlock', 'config', '-section:system.webServer/modules'))) {
    $res = Invoke-Native $appcmd $a
    if ($res.ExitCode -ne 0) { Write-Warning "appcmd $($a -join ' '): $($res.Output)" }
}
'parent paths, подробные ошибки, codepage 1251'

Step '7. Доступ пула к SQL Server'
foreach ($p in @($pool, $apiPool)) {
    Restart-WebAppPool -Name $p -ErrorAction SilentlyContinue
    $sql = @"
IF SUSER_ID(N'IIS APPPOOL\$p') IS NULL CREATE LOGIN [IIS APPPOOL\$p] FROM WINDOWS WITH DEFAULT_DATABASE = main4;
USE main4;
IF USER_ID(N'IIS APPPOOL\$p') IS NULL CREATE USER [IIS APPPOOL\$p] FOR LOGIN [IIS APPPOOL\$p];
ALTER ROLE db_owner ADD MEMBER [IIS APPPOOL\$p];
"@
    $cn = New-Object System.Data.SqlClient.SqlConnection 'Server=localhost;Database=master;Integrated Security=true'
    $cn.Open(); $c = $cn.CreateCommand(); $c.CommandText = $sql; [void]$c.ExecuteNonQuery(); $cn.Close()
    "IIS APPPOOL\$p -> db_owner в main4"
}

Step '8. Перезапуск IIS'
Invoke-Native "$env:windir\system32\iisreset.exe" @('/restart') | Out-Null
Start-WebSite -Name $site -ErrorAction SilentlyContinue
"Готово: http://localhost:$port/"
try { $resp = Invoke-WebRequest "http://localhost:$port/about.html" -UseBasicParsing -TimeoutSec 60; "about.html -> HTTP $($resp.StatusCode)" } catch { Write-Warning "about.html: $($_.Exception.Message)" }

Step '9. Служба NetCityServices (NetCity.ServicesHost.exe: токены сессий, планировщик, очередь)'
foreach ($src in 'Info', 'Error', 'ExceptionLog') {
    $name = "NetCityServicesHost.$src"
    if (-not [Diagnostics.EventLog]::SourceExists($name)) { [Diagnostics.EventLog]::CreateEventSource($name, 'Application') }
}
'источники журнала событий зарегистрированы'
$svcExe = "$root\Assemblies\NetCity.ServicesHost.exe"
if (-not (Get-Service NetCityServices -ErrorAction SilentlyContinue)) {
    New-Service -Name NetCityServices -BinaryPathName "`"$svcExe`"" -DisplayName 'NetCity Services' -StartupType Automatic | Out-Null
    'служба создана (LocalSystem)'
}
# LocalSystem name is localized (NT AUTHORITY\СИСТЕМА on Russian Windows) -> resolve by SID
$sys = (New-Object Security.Principal.SecurityIdentifier 'S-1-5-18').Translate([Security.Principal.NTAccount]).Value
$sql = @"
IF SUSER_ID(N'$sys') IS NULL CREATE LOGIN [$sys] FROM WINDOWS;
USE main4;
IF USER_ID(N'$sys') IS NULL CREATE USER [$sys] FOR LOGIN [$sys];
ALTER ROLE db_owner ADD MEMBER [$sys];
"@
$cn = New-Object System.Data.SqlClient.SqlConnection 'Server=localhost;Database=master;Integrated Security=true'
$cn.Open(); $c = $cn.CreateCommand(); $c.CommandText = $sql; [void]$c.ExecuteNonQuery(); $cn.Close()
"$sys -> db_owner в main4"
Get-Process NetCity.ServicesHost -ErrorAction SilentlyContinue | Stop-Process -Force
Restart-Service NetCityServices -ErrorAction SilentlyContinue
if ((Get-Service NetCityServices).Status -ne 'Running') { Start-Service NetCityServices }
$ok = $false
for ($i = 0; $i -lt 24 -and -not $ok; $i++) { Start-Sleep 5; $ok = (Test-NetConnection 127.0.0.1 -Port 8458 -WarningAction SilentlyContinue).TcpTestSucceeded }
if ($ok) { 'служба запущена, порт 8458 слушается' } else { Write-Warning "Служба не открыла порт 8458 за 2 минуты. Статус: $((Get-Service NetCityServices).Status). Смотрите Assemblies\Logs и журнал Application." }

Step '10. Служба NetCityQueueProcessor (обработчик очереди фоновых задач)'
# NetCity.Services.QueueProcessor.exe blocks on Console.ReadLine(); started by NetCityServices without a console
# it exits right after initialization and queued tasks hang "InQueue". QueueProcessorHost keeps its stdin open.
$qpHost = "$root\Assemblies\NetCity.QueueProcessorHost.exe"
if (-not (Test-Path $qpHost)) {
    $res = Invoke-Native "$env:windir\Microsoft.NET\Framework64\v4.0.30319\csc.exe" @('/nologo', '/target:exe', "/out:$qpHost", '/r:System.ServiceProcess.dll', "$PSScriptRoot\QueueProcessorHost.cs")
    if ($res.ExitCode -ne 0) { throw "Не удалось собрать QueueProcessorHost: $($res.Output)" }
}
if (-not (Select-String -Path "$root\ns.config" -Pattern 'key="QUEUEPROC"' -Quiet)) {
    Write-Warning 'В ns.config нет <add key="QUEUEPROC" value="manual" /> - служба NetCityServices будет запускать второй, нерабочий экземпляр обработчика.'
}
if (-not (Get-Service NetCityQueueProcessor -ErrorAction SilentlyContinue)) {
    New-Service -Name NetCityQueueProcessor -BinaryPathName "`"$qpHost`"" -DisplayName 'NetCity Queue Processor' -StartupType Automatic -DependsOn NetCityServices | Out-Null
    'служба NetCityQueueProcessor создана (LocalSystem)'
}
Get-Process NetCity.Services.QueueProcessor -ErrorAction SilentlyContinue | Stop-Process -Force
Restart-Service NetCityServices -Force
Start-Sleep 5
Restart-Service NetCityQueueProcessor -Force -ErrorAction SilentlyContinue
if ((Get-Service NetCityQueueProcessor).Status -ne 'Running') { Start-Service NetCityQueueProcessor }
Start-Sleep 20
$qp = Get-Process NetCity.Services.QueueProcessor -ErrorAction SilentlyContinue
if ($qp) { "обработчик очереди работает (pid $($qp.Id -join ', '))" } else { Write-Warning "Обработчик очереди не запущен. Смотрите $root\Assemblies\Logs\QueueProcessorHost.log" }

Stop-Transcript | Out-Null
Write-Host "`nЛог сохранён: $log" -ForegroundColor Green
