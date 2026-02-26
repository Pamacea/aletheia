type LogLevel = 'info' | 'warn' | 'error' | 'debug';

interface LogContext {
  [key: string]: unknown;
}

class Logger {
  private isDev = process.env.NODE_ENV === 'development';

  log(level: LogLevel, message: string, error?: unknown, context?: LogContext) {
    const errorEntry = error ? { error: error instanceof Error ? error.message : String(error) } : {};
    const contextEntry = context && typeof context === 'object' ? context : {};

    const logEntry = {
      level,
      message,
      timestamp: new Date().toISOString(),
      ...errorEntry,
      ...contextEntry,
    };

    // In development, use console
    if (this.isDev) {
      const consoleMethod = level === 'error' ? console.error :
                           level === 'warn' ? console.warn :
                           level === 'debug' ? console.debug : console.log;
      consoleMethod(message, error || '', context || '');
    }

    // In production, you'd send to logging service
    // e.g., Sentry, LogRocket, Datadog
    // For now, we'll just not log to console
  }

  info(message: string, context?: LogContext) {
    this.log('info', message, undefined, context);
  }

  warn(message: string, context?: LogContext) {
    this.log('warn', message, undefined, context);
  }

  error(message: string, error?: unknown, context?: LogContext) {
    this.log('error', message, error, context);
  }

  debug(message: string, context?: LogContext) {
    if (this.isDev) {
      this.log('debug', message, undefined, context);
    }
  }
}

export const logger = new Logger();
