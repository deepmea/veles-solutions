# PowerShell скрипт для автоматического деплоя

Write-Host "🚀 Начинаем автоматический деплой VelesManager..." -ForegroundColor Green

# ВАЖНО: Замените эти значения на ваши!
$GITHUB_TOKEN = "YOUR_GITHUB_TOKEN_HERE"
$GITHUB_USERNAME = "YOUR_GITHUB_USERNAME_HERE"
$REPO_NAME = "veles-manager"

# Создаем репозиторий на GitHub
Write-Host "📦 Создаем репозиторий на GitHub..." -ForegroundColor Yellow

$headers = @{
    "Authorization" = "token $GITHUB_TOKEN"
    "Accept" = "application/vnd.github.v3+json"
}

$body = @{
    name = $REPO_NAME
    description = "VelesManager - Интеллектуальная система мониторинга"
    private = $false
    homepage = "https://veles.solutions"
} | ConvertTo-Json

try {
    $response = Invoke-RestMethod -Uri "https://api.github.com/user/repos" -Method Post -Headers $headers -Body $body
    Write-Host "✅ Репозиторий создан!" -ForegroundColor Green
} catch {
    if ($_.Exception.Response.StatusCode -eq 422) {
        Write-Host "⚠️ Репозиторий уже существует, продолжаем..." -ForegroundColor Yellow
    } else {
        Write-Host "❌ Ошибка: $_" -ForegroundColor Red
        exit 1
    }
}

# Настраиваем git и пушим
Write-Host "📤 Загружаем код на GitHub..." -ForegroundColor Yellow

git remote remove origin 2>$null
git remote add origin "https://${GITHUB_USERNAME}:${GITHUB_TOKEN}@github.com/${GITHUB_USERNAME}/${REPO_NAME}.git"
git branch -M main
git push -u origin main --force

Write-Host "✅ Код загружен на GitHub!" -ForegroundColor Green

# Проверяем Vercel CLI
Write-Host "🔍 Проверяем Vercel CLI..." -ForegroundColor Yellow

if (!(Get-Command vercel -ErrorAction SilentlyContinue)) {
    Write-Host "📥 Устанавливаем Vercel CLI..." -ForegroundColor Yellow
    npm i -g vercel
}

# Деплоим на Vercel
Write-Host "🌐 Деплоим на Vercel..." -ForegroundColor Yellow
Write-Host "⚠️ Следуйте инструкциям Vercel CLI:" -ForegroundColor Cyan

cd frontend
vercel --prod

Write-Host "`n✅ Деплой завершен!" -ForegroundColor Green
Write-Host "📌 Теперь добавьте домен veles.solutions в настройках проекта на Vercel" -ForegroundColor Cyan
Write-Host "🔗 https://vercel.com/dashboard" -ForegroundColor Blue