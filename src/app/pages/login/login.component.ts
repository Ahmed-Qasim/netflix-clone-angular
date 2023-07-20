import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnChanges, SimpleChanges } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/service/authservice.service';
import { MyapiservService } from 'src/app/service/myapiserv.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnChanges {

  

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }
  errorMessage: string = '';
  form!: FormGroup;
  loading: boolean = false;
  route: string = '/home';

  constructor(
    private service: MyapiservService,
    public router: Router,
    private fb: FormBuilder,
    private authservice: AuthserviceService
  ) {
    this.form = this.fb.group({
      email: ['', Validators.required, Validators.email],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.login();
  }

  login() {
    const val = this.form.value;
    if (val.email && val.password) {
      this.authservice.Login(val.email, val.password).subscribe(
        () => {
          this.router.navigateByUrl('/home');
        },
        (error) => {
          //Error callback

          this.errorMessage = error.error;
          console.log(error);
          this.loading = false;
          this.route = '/login';
        }
      );
    }
  }

  // submit() {
  //   const data = { userEmail: this.formData.Email , userPassword:this.formData.Password};
  //   this.http.post('https://localhost:7253/api/Login', data).subscribe((response) => {
  //     console.log(response);
  //     this.router.navigateByUrl('/home');
  //   },
  //   (error) => {                              //Error callback
  //     console.error('error caught in component')
  //     this.errorMessage = error;
  //     console.log(error);
  //     this.loading = false;
  //     this.route = '/login';
  //     throw error;
  //   });

  // handleError(error: HttpErrorResponse) {
  //   if (error.status === 400) {
  //         confirm("the Email is not exist");
  //     // handle unauthorized error
  //   }  else {
  //     // handle other errors
  //   }
  // }
}
