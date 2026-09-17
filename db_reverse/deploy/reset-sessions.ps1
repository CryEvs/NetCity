# Сброс счётчика активных сессий "Сетевого Города" без перезапуска службы NetCityServices.
# Делает то же, что RedisSessionCounterCorrector.Reset() при старте службы.
# Нужен, пока не пройден мастер ввода данных: в этот период в школу пускается только
# один администратор, а "потерянная" после F5 сессия продолжает числиться активной.
#   powershell -ExecutionPolicy Bypass -File db_reverse\deploy\reset-sessions.ps1

$cli = 'C:\Program Files\Redis\redis-cli.exe'
if (-not (Test-Path $cli)) { $cli = (Get-Command redis-cli -ErrorAction Stop).Source }

$keys = @(& $cli --raw KEYS 'services:sessioncounter:*') | Where-Object { $_ }
if (-not $keys) { 'Активных сессий в счётчике нет.'; return }
foreach ($k in $keys) {
    $len = if ($k -like '*tokensinfo') { & $cli --raw HLEN $k } else { & $cli --raw LLEN $k }
    "{0}  ({1})" -f $k, $len
}
& $cli --raw DEL @keys | Out-Null
"Счётчик сессий сброшен: удалено ключей $($keys.Count). Можно входить заново."
