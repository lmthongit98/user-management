import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../_helpers/auth.guard';
import { Role } from '../_models/role';
import { AddEditComponent } from './add-edit/add-edit.component';
import { DetailComponent } from './detail/detail.component';
import { LayoutComponent } from './layout/layout.component';
import { ListComponent } from './list/list.component';


const routes: Routes = [
  {
      path: '', component: LayoutComponent,
      canActivate: [AuthGuard], data: { roles: [Role.Admin] },
      children: [
          { path: '', component: ListComponent },
          { path: 'detail/:id', component: DetailComponent }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
