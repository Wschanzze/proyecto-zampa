@echo off
chcp 65001 > nul
setlocal enabledelayedexpansion

cd /d "c:\Users\JoshuaGonzalez\Desktop\backup\Documents\Joshua\Proyectos\Agri  WEB"

echo === INSTALANDO DEPENDENCIAS ===
call npm install 2>&1 | tee install.log

echo.
echo === VERIFICANDO TIPOS ===
call npm run type-check 2>&1 | tee type-check.log

echo.
echo === LINTING ===
call npm run lint 2>&1 | tee lint.log

echo.
echo === BUILD ===
call npm run build 2>&1 | tee build.log

echo.
echo === RESUMEN ===
echo Los logs se guardaron en:
echo - install.log
echo - type-check.log
echo - lint.log
echo - build.log

pause
