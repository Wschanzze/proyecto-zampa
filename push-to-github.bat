@echo off
chcp 65001 > nul
setlocal enabledelayedexpansion

cd /d "c:\Users\JoshuaGonzalez\Desktop\backup\Documents\Joshua\Proyectos\Agri  WEB"

echo === Configurando Git ===
git config user.email "joshua@example.com"
git config user.name "Joshua Gonzalez"

echo === Agregando archivos ===
git add .

echo === Verificando estado ===
git status

echo === Creando commit ===
git commit -m "chore: Vercel deployment ready - all components migrated and Rocket.new URLs replaced with Unsplash"

echo === Configurando repositorio remoto ===
git remote remove origin 2>nul
git remote add origin https://github.com/Wschanzze/proyecto-zampa.git

echo === Haciendo push a main ===
git branch -M main
git push -u origin main

echo === ¡Completado! ===
pause
