#!/bin/bash

# Автоматический деплой на GitHub и Vercel

echo "🚀 Начинаем автоматический деплой..."

# Проверяем наличие git
if ! command -v git &> /dev/null; then
    echo "❌ Git не установлен!"
    exit 1
fi

# GitHub Token (нужно заменить на ваш)
GITHUB_TOKEN="YOUR_GITHUB_TOKEN"
GITHUB_USERNAME="YOUR_GITHUB_USERNAME"
REPO_NAME="veles-manager"

# Создаем репозиторий на GitHub через API
echo "📦 Создаем репозиторий на GitHub..."
curl -H "Authorization: token $GITHUB_TOKEN" \
     -H "Accept: application/vnd.github.v3+json" \
     https://api.github.com/user/repos \
     -d "{\"name\":\"$REPO_NAME\",\"private\":false,\"description\":\"VelesManager - Интеллектуальная система мониторинга\"}"

# Добавляем remote и пушим
echo "📤 Загружаем код на GitHub..."
git remote add origin "https://github.com/$GITHUB_USERNAME/$REPO_NAME.git" 2>/dev/null || git remote set-url origin "https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"
git branch -M main
git push -u origin main --force

# Устанавливаем Vercel CLI если нет
if ! command -v vercel &> /dev/null; then
    echo "📥 Устанавливаем Vercel CLI..."
    npm i -g vercel
fi

# Деплоим на Vercel
echo "🌐 Деплоим на Vercel..."
cd frontend
vercel --prod --yes

echo "✅ Деплой завершен!"
echo "📌 Не забудьте настроить домен veles.solutions в панели Vercel"