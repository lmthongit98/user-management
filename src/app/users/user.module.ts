import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import { UserRoutingModule } from './user-routing.module';
import { AddEditComponent } from './add-edit/add-edit.component';
import { LayoutComponent } from './layout/layout.component';
import { ListComponent } from './list/list.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ConfirmComponent } from './confirm/confirm.component';
import {MatButtonModule} from '@angular/material/button';
import { DetailComponent } from './detail/detail.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AddEditComponent,
    LayoutComponent,
    ListComponent,
    ConfirmComponent,
    DetailComponent,

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatButtonModule,
  ]
})
export class UserModule { }
