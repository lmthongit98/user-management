import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
// import { UserModule } from './users/user.module';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import {MatButtonModule} from '@angular/material/button';
import { SharedModule } from './shared/shared.module';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { PageNotFoundComponent } from './_components/pagenotfound/pagenotfound.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PageNotFoundComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // UserModule, //lazy load
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSnackBarModule,
    SimpleNotificationsModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
