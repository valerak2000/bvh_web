// Polyfill TextEncoder/TextDecoder for jsdom compatibility with Node.js 24+
const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;