param(
  [Parameter(ValueFromRemainingArguments = $true)]
  [string[]]$ExtraArgs
)
$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot
if ($ExtraArgs.Count -gt 0) {
  npm run post:social -- @ExtraArgs
} else {
  npm run post:social
}
exit $LASTEXITCODE
