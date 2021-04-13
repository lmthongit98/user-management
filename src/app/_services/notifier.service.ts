
import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { Notification } from '../_models/notification';


@Injectable({
  providedIn: 'root'
})
export class NotifierService {

  constructor() { }
  private notificationSource = new BehaviorSubject<Notification>(undefined!);

  notification$ = this.notificationSource.asObservable();

  show(notification: Notification) {
      this.notificationSource.next(notification);
  }
}

