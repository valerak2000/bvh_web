# CI/CD Skill

Навык для настройки непрерывной интеграции и деплоя.

## Capabilities

- GitHub Actions workflows
- GitLab CI конфигурация
- Автоматические тесты
- Автоматический деплой
- Linting и code quality checks

## Usage

```bash
skill: "ci-cd"
```

## GitHub Actions (.github/workflows/)

### Backend CI

```yaml
name: Backend CI

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    services:
      postgres:
        image: postgres:15
        env:
          POSTGRES_DB: djangoreactredux_test
          POSTGRES_USER: djangoreactredux
          POSTGRES_PASSWORD: test
        ports:
          - 5433:5432

    steps:
      - uses: actions/checkout@v4
      
      - name: Set up Python
        uses: actions/setup-python@v5
        with:
          python-version: '3.12'
      
      - name: Install dependencies
        run: |
          cd backend
          pip install -r py-requirements/dev.txt
      
      - name: Run tests
        run: |
          cd backend
          pytest -c pytest_ci.ini
      
      - name: Lint
        run: |
          cd backend
          prospector
          bandit -r .
```

### Frontend CI

```yaml
name: Frontend CI

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
      
      - name: Install dependencies
        run: |
          cd frontend
          npm24 install
      
      - name: Lint
        run: |
          cd frontend
          npm run lint
      
      - name: Test
        run: |
          cd frontend
          npm run test-ci
      
      - name: Build
        run: |
          cd frontend
          npm run build
```

### Full Pipeline

```yaml
name: Full CI/CD

on:
  push:
    branches: [main, master]
  pull_request:
    branches: [main, master]

jobs:
  backend-test:
    # ... backend тесты
    
  frontend-test:
    # ... frontend тесты
    
  deploy:
    needs: [backend-test, frontend-test]
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to production
        run: |
          # деплой скрипт
```

## GitLab CI (.gitlab-ci.yml)

```yaml
stages:
  - test
  - build
  - deploy

backend_test:
  stage: test
  image: python:3.12
  script:
    - cd backend
    - pip install -r py-requirements/dev.txt
    - pytest -c pytest_ci.ini

frontend_test:
  stage: test
  image: node:20
  script:
    - cd frontend
    - npm24 install
    - npm run lint
    - npm run test-ci

deploy:
  stage: deploy
  script:
    - ./deploy.sh
  only:
    - main
```
