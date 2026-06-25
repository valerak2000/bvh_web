const path = require('path');

// Определяем режим из переменной окружения или по умолчанию development
const mode = process.env.NODE_ENV || 'development';

// Импортируем соответствующую конфигурацию
let config;

if (mode === 'production') {
    config = require('./webpack/prod.config.js');
} else if (mode === 'analyze') {
    config = require('./webpack/analyzer.config.js');
} else {
    config = require('./webpack/dev.config.js');
}

// Экспортируем конфигурацию
module.exports = typeof config === 'function' ? config(mode) : config;