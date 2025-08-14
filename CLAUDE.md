# VELES Solutions - База знаний проекта

## Структура проекта

### Тип проекта
- **Монорепозиторий** с разделением frontend/backend
- **SaaS платформа** для управления рисками с мультитенантной архитектурой

### Директории
```
vmcom/
├── frontend/          # Next.js 14 приложение (деплоится на Vercel)
├── backend/           # FastAPI приложение (отдельный деплой)
├── docker/            # Docker конфигурации
└── .github/           # GitHub Actions и CI/CD
```

## Деплой на Vercel

### ВАЖНО: Основные моменты
1. **Деплой происходит из папки `/frontend`** - это главное приложение
2. **Домен `veles.solutions` уже привязан** к проекту `frontend` на Vercel
3. **Проект `vmcom` - это отдельный тестовый проект**, не используйте его для продакшн деплоя

### Команды деплоя
```bash
# Правильный деплой (из папки frontend)
cd frontend
vercel --prod --yes

# НЕ деплойте из корня проекта!
```

### Связанные домены
- **Основной**: https://veles.solutions
- **WWW**: https://www.veles.solutions  
- **Vercel**: https://veles-solutions.vercel.app
- **API** (планируется): https://api.veles.solutions

### Алиасы проекта
- Домен `veles.solutions` привязан к деплою `frontend-go1zdzavs`
- Последний продакшн деплой автоматически получает алиас домена

## Структура Frontend приложения

### Технологии
- **Framework**: Next.js 14.2.31
- **Styling**: Tailwind CSS
- **Authentication**: NextAuth.js
- **Charts**: Recharts
- **UI Components**: Custom components

### Важные директории
```
frontend/
├── app/               # App Router pages
│   ├── dashboard/     # Защищенные страницы дашборда
│   ├── demo/          # Публичная демо страница
│   └── api/           # API Routes
├── components/        # React компоненты
├── public/            # Статические файлы (ЗДЕСЬ размещать файлы верификации!)
└── lib/               # Утилиты и хелперы
```

### Публичные файлы
**ВАЖНО**: Все файлы для верификации доменов, robots.txt, sitemap.xml и другие публичные файлы должны размещаться в папке `frontend/public/`

## Backend структура

### Технологии
- **Framework**: FastAPI (Python)
- **Database**: PostgreSQL с Row Level Security
- **Queue**: Redis + Celery
- **Authentication**: JWT tokens

### Деплой backend
- Деплоится отдельно от frontend
- Варианты: DigitalOcean App Platform, AWS ECS
- Используется Docker для контейнеризации

## Команды разработки

### Frontend
```bash
cd frontend
npm install          # Установка зависимостей
npm run dev          # Локальная разработка (http://localhost:3000)
npm run build        # Сборка для продакшн
npm run lint         # Проверка кода
npm run typecheck    # Проверка типов TypeScript
```

### Backend
```bash
cd backend
pip install -r requirements.txt   # Установка зависимостей
uvicorn main:app --reload         # Локальная разработка
```

### Docker (полный стек)
```bash
docker-compose up -d               # Запуск всех сервисов
docker-compose down                # Остановка сервисов
```

## Git workflow

### Ветки
- `main` - основная ветка, автодеплой на Vercel
- Для новых фич создавайте отдельные ветки

### Коммиты
```bash
git add .
git commit -m "Описание изменений"
git push origin main
```

После пуша в main автоматически запускается деплой на Vercel.

## Безопасность

### Заголовки безопасности
Настроены в `frontend/vercel.json`:
- Content Security Policy (CSP)
- HSTS
- X-Frame-Options
- X-Content-Type-Options
- Referrer Policy

### Переменные окружения
- Хранятся в Vercel Dashboard
- Локально используйте `.env.local` (не коммитить!)

## Мониторинг и логи

### Vercel Dashboard
- https://vercel.com/veles-projects-c8c94efe/frontend
- Просмотр деплоев, логов, аналитики

### Проверка статуса
```bash
cd frontend
vercel ls            # Список деплоев
vercel logs          # Просмотр логов
```

## Частые задачи

### Добавление файла верификации домена
1. Поместите файл в `frontend/public/`
2. Закоммитьте и запушьте изменения
3. Деплой произойдет автоматически или запустите `cd frontend && vercel --prod`

### Обновление контента сайта
1. Редактируйте файлы в `frontend/app/`
2. Проверьте локально: `cd frontend && npm run dev`
3. Запушьте в main для автодеплоя

### Добавление новой страницы
1. Создайте папку в `frontend/app/имя-страницы/`
2. Создайте файл `page.tsx` внутри папки
3. Следуйте существующим примерам оформления

## Контакты и поддержка

- **GitHub**: https://github.com/deepmea/veles-solutions
- **Vercel Project**: veles-projects-c8c94efe/frontend
- **Production URL**: https://veles.solutions

## Чек-лист перед деплоем

- [ ] Код проверен локально (`npm run dev`)
- [ ] Тесты пройдены (`npm test`)
- [ ] Линтер не выдает ошибок (`npm run lint`)
- [ ] TypeScript компилируется (`npm run typecheck`)
- [ ] Изменения закоммичены в git
- [ ] Деплой из папки `frontend/`

---
*Последнее обновление: 14.08.2025*