param(
    [Parameter(Mandatory)] [string[]] $Files,
    [string] $Server = 'localhost',
    [string] $Database = 'master',
    [switch] $StopOnError
)
# Executes T-SQL scripts batch by batch (split on GO), reports failed batches without stopping.
$cn = New-Object System.Data.SqlClient.SqlConnection "Server=$Server;Database=$Database;Integrated Security=true;Connect Timeout=15"
$cn.Open()
$total = 0; $failed = 0
foreach ($f in $Files) {
    $text = [IO.File]::ReadAllText((Resolve-Path $f), [Text.Encoding]::UTF8)
    $batches = [regex]::Split($text, '(?im)^\s*GO\s*;?\s*$') | Where-Object { $_ -match '\S' -and ($_ -replace '(?s)/\*.*?\*/','' -replace '--[^\r\n]*','') -match '\S' }
    $ok = 0; $errs = @()
    foreach ($b in $batches) {
        $cmd = $cn.CreateCommand(); $cmd.CommandText = $b; $cmd.CommandTimeout = 600
        try { [void]$cmd.ExecuteNonQuery(); $ok++ }
        catch {
            $failed++
            $first = ($b.Trim() -split "`n")[0]
            $errs += "  FAIL: $($first.Substring(0,[Math]::Min(100,$first.Length)))`n        $(if ($_.Exception.InnerException) { $_.Exception.InnerException.Message } else { $_.Exception.Message })"
            if ($StopOnError) { break }
        }
    }
    $total += $batches.Count
    "{0}: {1}/{2} batches OK" -f (Split-Path $f -Leaf), $ok, $batches.Count
    $errs | Select-Object -First 40
}
$cn.Close()
"TOTAL batches: $total, failed: $failed"
