import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Alert, Notification } from '../_models/notification';
import { AuthenticationService } from '../_services/auth.service';
import { NotifierService } from '../_services/notifier.service';
import { UserService } from '../_services/user.service';



@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private userService: UserService,
    private router: Router,
    private authenticationService: AuthenticationService,
    private notifier: NotifierService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authenticationService.currentUserValue;

    if (currentUser) {
      // check if route is restricted by role
      if (route.data.roles && route.data.roles.indexOf(currentUser.role) === -1) {
        this.userService.notify('You do not have the permission to access this page !', 'WARNING');
        // role not authorised so redirect to home page
        this.router.navigate(['/']);
        return false;
      }

      // authorised so return true
      return true;
    }
    this.notifier.show(new Notification(Alert.WARN, 'Please login to access to this page!', 2000));
    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
