import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) { }

  userLoginForm = new FormGroup({})
  errorLogin = undefined;
  loading = false;
  submitted = false;
  returnUrl: string = '';

  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(4),
  ]);
  usernameFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(4),
  ]);

  ngOnInit(): void {
    this.userLoginForm = new FormGroup({
      username: this.usernameFormControl,
      password: this.passwordFormControl,
    })
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.userLoginForm.controls; }



  onSubmit() {
    const {username, password} = this.userLoginForm.value;

      this.authenticationService.login(username, password);
      this.router.navigate(['/']);


  }

}
