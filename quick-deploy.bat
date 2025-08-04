@echo off
echo.
echo ===================================
echo   VelesManager Quick Deploy
echo ===================================
echo.

REM Проверяем git
where git >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Git не установлен!
    pause
    exit /b 1
)

REM Пушим на GitHub (потребуется авторизация)
echo [1/3] Загружаем на GitHub...
echo.
echo ВАЖНО: Сначала создайте репозиторий на GitHub.com:
echo 1. Зайдите на https://github.com/new
echo 2. Название: veles-manager
echo 3. Создайте БЕЗ README
echo.
pause

git remote remove origin 2>nul
set /p GITHUB_USERNAME="Введите ваш GitHub username: "
git remote add origin https://github.com/%GITHUB_USERNAME%/veles-manager.git
git branch -M main
git push -u origin main

REM Проверяем Vercel CLI
echo.
echo [2/3] Проверяем Vercel CLI...
where vercel >nul 2>nul
if %errorlevel% neq 0 (
    echo Устанавливаем Vercel CLI...
    call npm i -g vercel
)

REM Деплоим на Vercel
echo.
echo [3/3] Деплоим на Vercel...
cd frontend
echo.
echo При первом запуске Vercel спросит:
echo - Set up and deploy: Y
echo - Which scope: выберите ваш аккаунт
echo - Link to existing project: N
echo - Project name: veles-manager
echo - Directory: ./ (просто Enter)
echo - Override settings: N
echo.
vercel --prod

echo.
echo ===================================
echo   Деплой завершен!
echo ===================================
echo.
echo Следующие шаги:
echo 1. Зайдите на https://vercel.com/dashboard
echo 2. Найдите проект veles-manager
echo 3. Settings - Domains - Add veles.solutions
echo 4. Настройте DNS в Namecheap
echo.
pause