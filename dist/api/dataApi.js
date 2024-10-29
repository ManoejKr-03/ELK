"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var fs = require('fs');
var path = require('path');
var morgan = require('morgan');
var winston = require('winston');
// Add this import for typing
var app = express();
var PORT = 5000;
// Configure logging with Winston
var logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.File({ filename: path.join(__dirname, '../../logs/elk-log.json') })
    ]
});
// Morgan to log HTTP requests to access.log
app.use(morgan('combined', {
    stream: fs.createWriteStream(path.join(__dirname, '../../logs/access.log'), { flags: 'a' })
}));
// Sample data to send to the frontend
var data = [
    { id: 1, name: 'Item 1', description: 'Description of Item 1' },
    { id: 2, name: 'Item 2', description: 'Description of Item 2' }
];
// Endpoint to fetch data and log the request
app.get('/api/data', function (_req, res) {
    logger.info('Data fetched', { timestamp: new Date().toISOString(), endpoint: '/api/data' });
    res.json(data);
});
app.listen(PORT, function () { return console.log("Server running on http://localhost:".concat(PORT)); });
