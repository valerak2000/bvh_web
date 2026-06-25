# React Skill

Навык для работы с React frontend.

## Capabilities

- React 19 (функциональные компоненты, хуки)
- Material-UI (MUI) v7 компоненты
- Redux / Redux Toolkit
- React Router v5
- TypeScript + JavaScript
- Webpack 5 HMR

## Usage

```bash
skill: "react"
```

## Common Commands

```bash
# Установка зависимостей
npm24 i

# Dev сервер
npm run dev
npm run start-dev

# Production сборка
npm run build
npm run start-prod

# Линтинг
npm run lint
npm run lint-js
npm run lint-less

# Форматирование
npm run format
npm run format-check

# Тесты
npm test
npm run test-ci

# Анализ бандла
npm run build-analysis
npm run test-bundle
```

## Project Structure

```
frontend/src/
├── actions/        # Redux actions
├── assets/         # Изображения, шрифты
├── commons/        # Общие функции
├── components/     # Презентационные компоненты
├── containers/     # Redux контейнеры
├── constants/      # Константы
├── reducers/       # Redux reducers
├── routes/         # Маршруты
├── store/          # Redux store конфигурация
├── styles/         # Глобальные стили
├── utils/          # Утилиты
└── views/          # Страницы
```

## Key Technologies

- **State Management**: Redux, Redux Toolkit
- **UI Library**: Material-UI (@mui/material)
- **Routing**: React Router DOM v5
- **Styling**: LESS, SCSS, CSS Modules
- **Testing**: Jest, Enzyme
- **Build**: Webpack 5
