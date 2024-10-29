import { Request, Response } from 'express';
const express = require('express');
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');
const winston = require('winston');
  // Add this import for typing

const app = express();
const PORT = 5000;

// Configure logging with Winston
const logger = winston.createLogger({
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
const data = [
  { id: 1, name: 'Item 1', description: 'Description of Item 1' },
  { id: 2, name: 'Item 2', description: 'Description of Item 2' }
];

// Endpoint to fetch data and log the request
app.get('/api/data', (_req: Request, res: Response) => { // Typing req as Request and using _req
  logger.info('Data fetched', { timestamp: new Date().toISOString(), endpoint: '/api/data' });
  res.json(data);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

export {}; // Makes the file a module
