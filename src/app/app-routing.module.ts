import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './_helpers/auth.guard';
import { Role } from './_models/role';

const usersModule = () => import('./users/user.module').then(x => x.UserModule);

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard], data: { roles: [Role.User, Role.Admin] } },
  { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard], data: { roles: [Role.Admin] } },
  { path: 'login', component: LoginComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
