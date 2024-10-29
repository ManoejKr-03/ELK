import winston from 'winston';
import path from 'path';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: path.join(__dirname, '../../logs/elk-log.json') })
  ]
});

export default logger;
