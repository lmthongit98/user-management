import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './_helpers/auth.guard';
import { Role } from './_models/role';
import { PageNotFoundComponent } from './_components/pagenotfound/pagenotfound.component'


const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard], data: { roles: [Role.User, Role.Admin] } },
  {path : 'project-jira', loadChildren: () => import('./project-jira/project-jira.module').then(m =>  m.ProjectJiraModule)},
  { path: 'users', loadChildren: () => import('./users/user.module').then(m => m.UserModule)},
  { path: 'login', component: LoginComponent },

  // otherwise redirect to home
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    // enableTracing: true, // <-- debugging purposes only
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
