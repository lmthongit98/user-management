import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './_models/user';
import { AuthenticationService } from './_services/auth.service';
import {NotificationsService} from "angular2-notifications";
import { Subscription } from 'rxjs';
import { Alert, Notification } from './_models/notification';
import {NotifierService} from  './_services/notifier.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'user-management';
  isLogin = false;
  currentUser!: User;

  notificationSub!: Subscription;
  notificationOptions:any = {
      position: ["bottom", "right"],
      timeOut: 2000,
      animate: "fromLeft",
      maxStack: 1,
      icons : {
          success: "",
          error: "",
          warn: "",
          info: "",
          alert: ""
      }
  };


  constructor(private authenticationService: AuthenticationService, private router: Router,
     private notificationsService: NotificationsService, private notifier: NotifierService
     ){

  }
  ngOnInit(): void {
    this.authenticationService.currentUser.subscribe(currentUser => {
      if(currentUser){
        this.currentUser = currentUser;
        this.isLogin = true;
      }
    })


    this.notificationSub = this.notifier.notification$.subscribe(notification => {
      if (notification) {
          this.showNotification(notification);
      }
    });

  }

  showNotification(notification: Notification) {
    if(!notification)
      return;

    // Dismiss notification
    if (notification.type == Alert.DISMISS) {
        this.notificationsService.remove();
        return;
    }

    // Show notification by type
    switch (notification.type) {
        case Alert.SUCCESS: {
            this.notificationsService.success('', notification.content, {
                timeOut: notification.timeout
            });
            break;
        }
        case Alert.ERROR: {
            this.notificationsService.error('', notification.content, {
                timeOut: notification.timeout
            });
            break;
        }
        case Alert.INFO: {
            this.notificationsService.info('', notification.content, {
                timeOut: notification.timeout
            });
            break;
        }
        case Alert.WARN: {
            this.notificationsService.warn('', notification.content, {
                timeOut: notification.timeout
            });
            break;
        }
    }
}




  logout(){
    this.authenticationService.logout();
    this.router.navigate(['/login'])
    this.isLogin = false;
  }
}
