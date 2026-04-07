# Docker Skill

Навык для контейнеризации приложения.

## Capabilities

- Создание Dockerfile для backend/frontend
- Docker Compose для оркестрации
- Multi-stage сборка
- Оптимизация образов

## Usage

```bash
skill: "docker"
```

## Пример Dockerfile (Backend)

```dockerfile
FROM python:3.12-slim

WORKDIR /app

# Установка зависимостей
COPY backend/py-requirements/ ./py-requirements/
RUN pip install --no-cache-dir -r py-requirements/dev.txt

# Копирование кода
COPY backend/ ./backend/

WORKDIR /app/backend

CMD ["python", "manage.py", "runserver", "0.0.0.0:3000"]
```

## Пример Dockerfile (Frontend)

```dockerfile
FROM node:20-alpine AS builder

WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm24 install
COPY frontend/ ./
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/frontend/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
```

## Пример docker-compose.yml

```yaml
version: '3.8'

services:
  db:
    image: postgres:15
    environment:
      POSTGRES_DB: djangoreactredux_dev
      POSTGRES_USER: djangoreactredux
      POSTGRES_PASSWORD: Rfvytgfldb
    ports:
      - "5433:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

  backend:
    build: ./backend
    command: python manage.py runserver 0.0.0.0:3000
    volumes:
      - ./backend:/app/backend
    ports:
      - "3000:3000"
    depends_on:
      - db

  frontend:
    build: ./frontend
    command: npm run dev
    volumes:
      - ./frontend:/app/frontend
      - /app/frontend/node_modules
    ports:
      - "8080:8080"

volumes:
  postgres_data:
```

## Commands

```bash
# Сборка
docker-compose build

# Запуск
docker-compose up
docker-compose up -d  # background

# Остановка
docker-compose down

# Логи
docker-compose logs -f

# Выполнение команд
docker-compose exec backend python manage.py migrate
docker-compose exec backend pytest
```
