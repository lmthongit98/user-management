export class Notification {
  type: Alert;
  content: string;
  timeout: number;

  /**
   * MyNotification Intent
   *
   * @param type @Alert Type of MyNotification
   * @param content
   * @param timeout Time in milliseconds
   */
  constructor(type: Alert, content?: string, timeout?: number) {
    this.type = type;
    this.content = content ? content : '';
    this.timeout = timeout ? timeout : 2000;
  }
}

export enum Alert {
  SUCCESS,
  INFO,
  WARN,
  ERROR,
  DISMISS
}
