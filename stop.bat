@echo off
set Disk=y
path=%PATH%;
 
taskkill /IM python.exe /F
taskkill /IM pythonw.exe /F
taskkill /IM scite.exe /F
 
REM ????????????
subst %Disk%: /D
REM ?? cmd ????
taskkill /IM cmd.exe /F
 
EXIT