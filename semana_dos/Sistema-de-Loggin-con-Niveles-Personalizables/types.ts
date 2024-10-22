export type LogLevel = 'DEBUG' | 'INFO' | 'WARN' | 'ERROR';

type DateFormat = 'ISO' | 'UTC' | 'LOCALE';

export type LoggerConfig = {
  minLevel: LogLevel;
  dateFormat: DateFormat;
  destination: 'consola' | 'archivo';
};

