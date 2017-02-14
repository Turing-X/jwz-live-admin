import debug from 'debug';

export default class Logger {
  constructor(namespace) {
    this.logger = debug(namespace);
  }

  log(...messages) {
    this.logger(...messages);
  }

  warn(...messages) {
    this.logger('* WARNING:', ...messages);
  }

  error(...messages) {
    this.logger('* ERROR:', ...messages);
  }
}
