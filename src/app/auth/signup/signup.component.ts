// import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { AuthService } from '../../auth.service';
// import { SignUpService } from './signup.service'
//
//
// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.component.html',
//   styleUrls: ['./signup.component.css']
// })
// export class SignupComponent implements OnInit {
//
//  constructor(private authService: AuthService, private signupService: SignUpService) { }
//
//   ngOnInit() {
//   }
//
//   onSignup(form: NgForm) {
//     const email = form.value.email;
//     const password = form.value.password;
//     this.authService.signupUser(email, password);//sets up auth service
//   }
//   addUser(form: NgForm) {
//     const email = form.value.email;
//     const password = form.value.password;
//     this.signupService.signUpUser(email, password)
//       .subscribe(
//         (response) => console.log(response),
//         (error) => console.log(error)
//       )
//   }
//
// }

import { Component, OnInit, Inject } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Http, Response} from '@angular/http';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  user: Object;
  constructor(private http: Http, @Inject(FormBuilder) fb: FormBuilder) {
    this.signupForm = fb.group({
      email: '',
      password: ''
    });
  }

  ngOnInit() {
  }
  onSubmit(values: string): any {
    const url = 'https://cheeswhiz.herokuapp.com/api/user/register';
    console.log('values', values);
    this.http.post(url, values)
      .subscribe((res: Response) => {
        this.user = res.json();
        console.log('user', this.user);
      });
  }
}
