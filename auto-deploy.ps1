# ВНИМАНИЕ: Используйте этот скрипт только локально!
# Удалите его после использования!

$GITHUB_TOKEN = $args[0]
$GITHUB_USERNAME = "YOUR_USERNAME" # <-- ЗАМЕНИТЕ на ваш username!

if (!$GITHUB_TOKEN) {
    Write-Host "Использование: .\auto-deploy.ps1 YOUR_TOKEN" -ForegroundColor Red
    exit 1
}

Write-Host "🚀 Начинаем деплой..." -ForegroundColor Green

# Создаем репозиторий
$headers = @{
    "Authorization" = "token $GITHUB_TOKEN"
    "Accept" = "application/vnd.github.v3+json"
}

$body = @{
    name = "veles-manager"
    description = "VelesManager - Интеллектуальная система мониторинга"
    private = $false
    homepage = "https://veles.solutions"
} | ConvertTo-Json

try {
    Invoke-RestMethod -Uri "https://api.github.com/user/repos" -Method Post -Headers $headers -Body $body
    Write-Host "✅ Репозиторий создан!" -ForegroundColor Green
} catch {
    Write-Host "⚠️ Репозиторий уже существует или ошибка" -ForegroundColor Yellow
}

# Пушим код
git remote remove origin 2>$null
git remote add origin "https://x-access-token:${GITHUB_TOKEN}@github.com/${GITHUB_USERNAME}/veles-manager.git"
git push -u origin main --force

Write-Host "✅ Код загружен!" -ForegroundColor Green
Write-Host "🌐 Теперь запустите: cd frontend && vercel --prod" -ForegroundColor Cyan

# Удаляем токен из памяти
Remove-Variable GITHUB_TOKEN