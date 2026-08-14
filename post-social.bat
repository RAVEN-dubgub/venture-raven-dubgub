@echo off
cd /d "%~dp0"
call npm run post:social -- %*
set EXIT=%ERRORLEVEL%
if %EXIT% neq 0 pause
exit /b %EXIT%
