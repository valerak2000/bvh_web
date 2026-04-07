# Django Skill

Навык для работы с Django backend.

## Capabilities

- Модели, миграции, ORM запросы
- Django REST Framework (сериализаторы, viewsets, routers)
- Аутентификация и авторизация
- Django admin настройка
- Формы и валидация
- Signals, middleware
- Тестирование с pytest-django

## Usage

```bash
skill: "django"
```

## Common Commands

```bash
# Миграции
python manage.py makemigrations
python manage.py migrate
python manage.py showmigrations

# Админка
python manage.py createsuperuser

# Shell
python manage.py shell
python manage.py shell_plus  # django-extensions

# Тесты
pytest backend/
pytest backend/ -v
pytest backend/tests/test_models.py

# Проверка кода
prospector
bandit -r backend/

# Запуск сервера
python manage.py runserver --settings=bvh_web.settings.dev
```

## Project Structure

```
backend/
├── accounts/       # User модель, аутентификация
├── base/           # Базовые views, API
├── bvh_web/        # Настройки проекта
├── lib/            # Общие утилиты
├── templates/      # Django шаблоны
└── tests/          # Тесты
```

## Key Files

- `backend/bvh_web/settings/dev.py` — dev настройки
- `backend/bvh_web/settings/base.py` — базовые настройки
- `backend/bvh_web/urls.py` — корневой URLconf
- `backend/accounts/models.py` — кастомная User модель (UUID)
