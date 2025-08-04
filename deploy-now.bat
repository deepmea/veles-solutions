@echo off
echo ===================================
echo   Деплой VelesManager
echo ===================================

REM Настройка git remote
git remote remove origin 2>nul
git remote add origin https://github.com/deepme/veles-manager.git

echo.
echo Сейчас будет запрошен ваш GitHub логин и пароль/токен
echo Используйте:
echo   Username: deepme
echo   Password: ваш токен (не пароль!)
echo.

git push -u origin main

echo.
echo Если все прошло успешно, теперь:
echo 1. cd frontend
echo 2. vercel --prod
echo.
pause