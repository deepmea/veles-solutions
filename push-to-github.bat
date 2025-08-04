@echo off
echo ===================================
echo   Загружаем на GitHub
echo ===================================
echo.

REM Убеждаемся что remote настроен правильно
git remote remove origin 2>nul
git remote add origin https://github.com/deepme/veles-manager.git

echo Пушим код...
echo При запросе используйте:
echo   Username: deepme
echo   Password: ваш GitHub токен
echo.

git push -u origin main

echo.
echo Готово! Теперь можно деплоить на Vercel:
echo   cd frontend
echo   npm install  
echo   vercel --prod
echo.
pause