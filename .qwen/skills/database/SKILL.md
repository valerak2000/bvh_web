# Database Skill

Навык для работы с PostgreSQL и Django ORM.

## Capabilities

- PostgreSQL запросы и оптимизация
- Django ORM QuerySet
- Миграции (создание, применение, откат)
- Индексы и производительность
- Backup и restore

## Usage

```bash
skill: "database"
```

## PostgreSQL Commands

```bash
# Подключение
psql -h localhost -p 5433 -U djangoreactredux djangoreactredux_dev

# Основные команды
\l              # список баз данных
\c dbname       # подключиться к БД
\dt             # список таблиц
\d table_name   # описание таблицы
\du             # список пользователей

# Backup
pg_dump -h localhost -p 5433 -U djangoreactredux djangoreactredux_dev > backup.sql

# Restore
psql -h localhost -p 5433 -U djangoreactredux djangoreactredux_dev < backup.sql

# Дамп только схема
pg_dump -s > schema.sql

# Дамп только данные
pg_dump -a > data.sql
```

## Django ORM

```python
# Базовые запросы
User.objects.all()
User.objects.filter(email='test@example.com')
User.objects.get(id=uuid)
User.objects.create(email='test@example.com', first_name='Test')

# Аннотации и агрегаты
from django.db.models import Count, Avg
User.objects.annotate(num_posts=Count('posts'))

# Select related (оптимизация)
User.objects.select_related('profile').all()
User.objects.prefetch_related('posts').all()

# Raw SQL
User.objects.raw('SELECT * FROM accounts_user WHERE is_active = %s', [True])

# Transactions
from django.db import transaction
with transaction.atomic():
    # атомарная операция
```

## Миграции

```bash
# Создать миграцию
python manage.py makemigrations
python manage.py makemigrations app_name --name migration_name

# Применить миграции
python manage.py migrate
python manage.py migrate app_name migration_name  # конкретная

# Откатить миграцию
python manage.py migrate app_name zero  # полностью
python manage.py migrate app_name migration_name  # до конкретной

# Показать статус
python manage.py showmigrations

# SQL миграции
python manage.py sqlmigrate app_name migration_number
```

## Оптимизация запросов

```python
# Проблема N+1
# Плохо:
for user in User.objects.all():
    print(user.profile.name)  # запрос на каждой итерации

# Хорошо:
for user in User.objects.select_related('profile').all():
    print(user.profile.name)  # один запрос

# Индексы в модели
class Meta:
    indexes = [
        models.Index(fields=['email']),
        models.Index(fields=['-date_joined']),
    ]
```
