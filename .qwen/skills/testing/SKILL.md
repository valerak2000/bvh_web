# Testing Skill

Навык для написания и запуска тестов.

## Capabilities

- Backend: pytest, pytest-django, pytest-cov
- Frontend: Jest, Enzyme, ts-jest
- Фикстуры и моки
- Coverage отчёты
- Parallel тесты (pytest-xdist)

## Usage

```bash
skill: "testing"
```

## Backend Tests (pytest)

```bash
# Запуск всех тестов
cd backend
pytest

# С покрытием
pytest --cov=.

# Конкретный файл
pytest tests/test_models.py

# С флагами
pytest -v          # verbose
pytest -s          # показать print
pytest -x          # остановка на первой ошибке
pytest --tb=short  # короткий traceback

# CI режим
pytest -c pytest_ci.ini

# Parallel запуск
pytest -n auto
```

### Pytest Structure

```
backend/tests/
├── test_models.py
├── test_views.py
├── test_serializers.py
└── conftest.py       # Общие фикстуры
```

## Frontend Tests (Jest)

```bash
cd frontend

# Watch режим
npm test

# CI режим
npm run test-ci

# Один файл
npx jest tests/components/MyComponent.test.jsx

# С покрытием
npx jest --coverage
```

### Jest Structure

```
frontend/tests/
├── components/
├── reducers/
├── actions/
└── __coverage__/     # Coverage отчёты
└── __reports__/      # HTML отчёты
```

## Fixtures

```bash
# Загрузка фикстур
python manage.py loaddata fixtures.json

# Дамп фикстур
python manage.py dumpdata > fixtures.json
```
