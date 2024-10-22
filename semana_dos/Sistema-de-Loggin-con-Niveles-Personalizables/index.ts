import { appendFile } from 'fs';

import { LogLevel, LoggerConfig } from './types';

export const colorLog: Record<LogLevel, string> = {
  DEBUG: '\x1b[34m%s\x1b[0m',
  INFO: '\x1b[32m%s\x1b[0m',
  WARN: '\x1b[33m%s\x1b[0m',
  ERROR: '\x1b[31m%s\x1b[0m',
};

const logLevelPriority: Record<LogLevel, number> = {
  DEBUG: 1,
  INFO: 2,
  WARN: 3,
  ERROR: 4,
};

class Logger {
  private config: LoggerConfig;

  constructor(config: LoggerConfig) {
    this.config = config;
  }

  setDestination(destination: 'consola' | 'archivo') {
    this.config.destination = destination;
  }

  private shouldLog(level: LogLevel): boolean {
    return logLevelPriority[level] >= logLevelPriority[this.config.minLevel];
  }

  private getFormattedDate(): string {
    const now = new Date();

    if (this.config.dateFormat === 'ISO') {
      return now.toISOString();
    }
    if (this.config.dateFormat === 'UTC') {
      return now.toUTCString();
    }
    if (this.config.dateFormat === 'LOCALE') {
      return now.toLocaleString();
    }
    else{
      return `Formato elegido no valido`
    }
  }

  log(level: LogLevel, message: string): void {
    const date = this.getFormattedDate();
    const logMessage = `${date} ${level}: ${message}`;

    if (this.shouldLog(level)) {
      if (this.config.destination === 'consola') {
        console.log(colorLog[level],logMessage);
      }
      if (this.config.destination === 'archivo') {
        appendFile('logs.txt', `${logMessage} \n`, (err) => {
          if (err) {
            console.error('Error escribiendo en el archivo:', err);
          }
        });
      }
    }
  }
}
