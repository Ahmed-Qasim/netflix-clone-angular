import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css'],
})
export class SingupComponent implements OnChanges {
  RegisterForm = new FormGroup({
    Fname: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('[a-zA-z]+$'),
    ]),
    Lname: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('[a-zA-z]+$'),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  get Fname() {
    return this.RegisterForm.get('Fname');
  }
  get Lname() {
    return this.RegisterForm.get('Lname');
  }
  get email() {
    return this.RegisterForm.get('email');
  }
  get password() {
    return this.RegisterForm.get('password');
  }

  loading: boolean = false;
  errorMessage: string = '';
  route: string = '/home';
  constructor(private http: HttpClient, public router: Router) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.submit();
  }

  submit() {
    const data = {
      fname: this.RegisterForm.get('Fname')?.value,
      lname: this.RegisterForm.get('Fname')?.value,
      email: this.RegisterForm.get('email')?.value,
      password: this.RegisterForm.get('password')?.value,
      subscriptionId: 1,
    };

    // const data =this.RegiesterForm.value

    this.http.post('https://localhost:7253/api/Users', data).subscribe(
      () => {
        this.router.navigateByUrl('/sign-in');
      },
      (error) => {
        //Error callback

        this.errorMessage = error.error;
        this.loading = false;
        this.route = '/login';
        throw error;
      }
    );
  }
}
