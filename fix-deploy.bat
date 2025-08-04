@echo off
echo Исправляем деплой...

REM Переименовываем ветку
git branch -M main

REM Пушим с правильной веткой
git push -u origin main --force

echo.
echo Готово! Теперь:
echo 1. cd frontend
echo 2. npm install
echo 3. vercel --prod
echo.
pause