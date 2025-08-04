@echo off
echo ===================================
echo   Финальный деплой на GitHub
echo ===================================
echo.

REM Правильный remote
git remote remove origin 2>nul
git remote add origin https://github.com/deepmea/veles-solutions.git

echo Загружаем на GitHub...
echo Username: deepmea
echo Password: ваш токен
echo.

git push -u origin main

echo.
echo ✓ Готово! Теперь деплоим на Vercel:
echo.
echo   cd frontend
echo   npm install
echo   vercel --prod
echo.
pause