# bvh_web — Fullstack Web Application

## Project Overview

**bvh_web** — это fullstack веб-приложение, построенное на стеке **Django + React + Material-UI**.

### Основные технологии

**Backend:**
- Django (с Django REST Framework)
- PostgreSQL (порт 5433)
- Django Knox для аутентификации по токенам
- pytest для тестирования

**Frontend:**
- React 19
- Material-UI (MUI) v7
- Redux / Redux Toolkit
- React Router
- TypeScript + JavaScript
- Webpack 5 с HMR (Hot Module Replacement)
- Jest для тестирования

**Стилизация:**
- LESS / SCSS
- CSS Modules

### Архитектура проекта

```
bvh_web/
├── backend/          # Django backend
│   ├── accounts/     # Пользовательская аутентификация
│   ├── base/         # Базовые views и API
│   ├── bvh_web/      # Настройки Django проекта
│   ├── lib/          # Вспомогательные библиотеки
│   ├── templates/    # Django шаблоны
│   └── tests/        # Backend тесты
├── frontend/         # React frontend
│   ├── src/
│   │   ├── actions/      # Redux actions
│   │   ├── components/   # React компоненты
│   │   ├── containers/   # Redux контейнеры
│   │   ├── reducers/     # Redux reducers
│   │   ├── routes/       # Маршрутизация
│   │   ├── store/        # Конфигурация Redux store
│   │   ├── views/        # Страницы/Views
│   │   └── utils/        # Утилиты
│   ├── tests/        # Frontend тесты
│   └── jest/         # Jest конфигурация
├── static/           # Статические файлы
└── docs/             # Документация и ресурсы
```

## Building and Running

### Первоначальная настройка

```bash
# Инициализация git submodules
git submodule init

# Настройка backend
cd backend
# Linux:
virtualenv -p /usr/bin/python3.12 py3
source py3/bin/activate
# Windows:
# py -3.12 -m venv py3

pip install -r py-requirements/dev.txt
python manage.py migrate --settings=bvh_web.settings.dev
python manage.py loaddata fixtures.json --settings=bvh_web.settings.dev

# Настройка frontend
cd ../frontend
npm24 i
```

### Запуск в режиме разработки

```bash
# Запуск обоих серверов (backend + frontend)
./rundev.sh

# Или вручную:
# Backend (порт 3000)
cd backend
source py3/bin/activate
python manage.py runserver --settings=bvh_web.settings.dev

# Frontend (Webpack dev server)
cd frontend
npm24 run dev
```

### Запуск в production

```bash
./runprod.sh
# или
cd backend
source py3/bin/activate
gunicorn --bind 0.0.0.0:3000 --env DJANGO_SETTINGS_MODULE=bvh_web.settings.prod bvh_web.wsgi
```

### Тестирование

**Backend:**
```bash
cd backend
pytest
# или с конфигурацией для CI
pytest -c pytest_ci.ini
```

**Frontend:**
```bash
cd frontend
npm test              # Jest в режиме watch
npm run test-ci       # CI режим с покрытием
```

### Другие полезные команды

**Backend:**
```bash
# Проверка кода (prospector, bandit)
prospector
bandit -r .

# Django shell
python manage.py shell

# Создать суперпользователя
python manage.py createsuperuser
```

**Frontend:**
```bash
# Production сборка
npm run build

# Анализ бандла
npm run build-analysis

# Линтинг
npm run lint
npm run lint-js
npm run lint-less

# Форматирование
npm run format
npm run format-check

# Проверка размеров бандла
npm run test-bundle
```

## Development Conventions

### Кодстайл

**Python:**
- Используется `prospector` для статического анализа
- `bandit` для проверки безопасности
- Следование PEP 8

**JavaScript/TypeScript:**
- ESLint + Prettier
- Конфигурация в `.eslintrc.js` и `.prettierrc`
- Поддержка React Hooks

### Тестирование

**Backend:**
- pytest с pytest-django
- Фикстуры в `fixtures.json`
- Поддержка параллельного запуска через pytest-xdist

**Frontend:**
- Jest + Enzyme
- Тесты в `frontend/tests/`
- Отчёты в HTML формате

### Структура Redux

```
actions/     → Экшены Redux
reducers/    → Редюсеры
store/       → Конфигурация store
containers/  → Подключённые компоненты (connect)
components/  → Презентационные компоненты
```

### База данных

- PostgreSQL на порту 5433
- Название БД: `djangoreactredux_dev`
- Пользователь: `djangoreactredux`
- Кастомная модель пользователя с UUID primary key

### Аутентификация

- Кастомная модель `User` в приложении `accounts`
- Email как USERNAME_FIELD
- Token-based аутентификация через Django Knox
- Активация по email с UUID ключом

## Environment Variables

- `NODE_ENV` — `development` / `production`
- `DJANGO_SETTINGS_MODULE` — `bvh_web.settings.dev` / `bvh_web.settings.prod`
- `DJANGO_SECRET_KEY` — секретный ключ Django

## Примечания

- Проект использует `screen` для запуска фоновых процессов в dev/prod скриптах
- Webpack настроен на проксирование API запросов на Django backend
- Статические файлы обслуживаются через WhiteNoise в production
