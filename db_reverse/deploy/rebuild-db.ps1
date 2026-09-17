# Полное пересоздание базы main4 из скриптов реконструкции (все данные удаляются!).
# Права администратора Windows не нужны: достаточно роли sysadmin в SQL Server.
#   powershell -ExecutionPolicy Bypass -File db_reverse\deploy\rebuild-db.ps1 [-WithTestSchool]
# После выполнения перезапустите IIS и службы (они кешируют настройки и сессии):
#   iisreset; Restart-Service NetCityServices, NetCityQueueProcessor
param(
    [string] $Server = 'localhost',
    [string] $Database = 'main4',
    [switch] $WithTestSchool
)
$ErrorActionPreference = 'Stop'
$dir = Resolve-Path "$PSScriptRoot\.."
$run = Join-Path $PSScriptRoot 'run-sql.ps1'

function Exec-Sql([string]$sql, [string]$db = 'master') {
    $cn = New-Object System.Data.SqlClient.SqlConnection "Server=$Server;Database=$db;Integrated Security=true"
    $cn.Open(); try { $c = $cn.CreateCommand(); $c.CommandTimeout = 600; $c.CommandText = $sql; [void]$c.ExecuteNonQuery() } finally { $cn.Close() }
}

Write-Host "=== пересоздание базы $Database" -ForegroundColor Cyan
Exec-Sql "IF DB_ID('$Database') IS NOT NULL BEGIN ALTER DATABASE [$Database] SET SINGLE_USER WITH ROLLBACK IMMEDIATE; DROP DATABASE [$Database]; END"
Exec-Sql "CREATE DATABASE [$Database] COLLATE Cyrillic_General_CI_AS"

$files = '01_orm_schema.sql', '02_legacy_tables.sql', '03_orm_tables_extra_columns.sql', '04_views_functions_procs.sql', '04a_functions_impl.sql',
         '06_fixes.sql', '08_insert_defaults.sql', '07_seed_reference.sql'
if ($WithTestSchool) { $files += '09_test_school.sql' }
$out = & $run -Server $Server -Database $Database -Files ($files | ForEach-Object { Join-Path $dir $_ })
$out
if ($out -match 'failed: [1-9]') { throw 'Не все пакеты выполнены, смотрите вывод выше.' }

Write-Host "=== доступ служб и пулов IIS" -ForegroundColor Cyan
$system = (New-Object Security.Principal.SecurityIdentifier 'S-1-5-18').Translate([Security.Principal.NTAccount]).Value
foreach ($login in @('IIS APPPOOL\NetCity', 'IIS APPPOOL\NetCityApi', $system)) {
    Exec-Sql @"
IF SUSER_ID(N'$login') IS NOT NULL
BEGIN
    IF USER_ID(N'$login') IS NULL CREATE USER [$login] FOR LOGIN [$login];
    ALTER ROLE db_owner ADD MEMBER [$login];
END
"@ $Database
    "  $login"
}

Write-Host "=== сброс счётчика сессий в Redis" -ForegroundColor Cyan
& (Join-Path $PSScriptRoot 'reset-sessions.ps1')

Write-Host "`nГотово. Перезапустите IIS и службы: iisreset; Restart-Service NetCityServices, NetCityQueueProcessor" -ForegroundColor Green
Write-Host "Вход администратора сервера: http://localhost:8080/asp/administration/salogin.asp  пароль: servadmin" -ForegroundColor Green
