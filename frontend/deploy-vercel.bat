@echo off
echo ===================================
echo   Деплой на Vercel
echo ===================================
echo.

echo 1. Сначала авторизуемся в Vercel:
echo    Откроется браузер - войдите в ваш аккаунт
echo.
vercel login

echo.
echo 2. Теперь деплоим проект:
echo.
vercel --prod

echo.
echo ✓ Готово!
echo.
echo Не забудьте добавить домен veles.solutions в настройках проекта!
echo.
pause