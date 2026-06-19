@echo off
chcp 65001 > nul
setlocal enabledelayedexpansion

cd /d "c:\Users\JoshuaGonzalez\Desktop\backup\Documents\Joshua\Proyectos\Agri  WEB"

echo === Instalando dependencias ===
call npm install

echo.
echo === Ejecutando type-check ===
call npm run type-check

echo.
echo === Ejecutando lint ===
call npm run lint

echo.
echo === Ejecutando build ===
call npm run build

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ✅ BUILD EXITOSO!
    echo El proyecto está listo para Vercel
) else (
    echo.
    echo ❌ BUILD FALLÓ!
    echo Revisa los errores arriba
)

pause
