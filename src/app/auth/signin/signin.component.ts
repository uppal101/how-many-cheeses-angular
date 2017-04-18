// import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
//
// @Component({
//   selector: 'app-signin',
//   templateUrl: './signin.component.html',
//   styleUrls: ['./signin.component.css']
// })
// export class SigninComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
//   onSignIn(form: NgForm) {
//     const email = form.value.email;
//     const password = form.value.password;
//   }
// }


import { Component, OnInit, Inject } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Http, Response} from '@angular/http';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup;
  user: Object;
  constructor(private http: Http, @Inject(FormBuilder) fb: FormBuilder) {
      this.signinForm = fb.group({
          email: '',
          password: ''
      })
   }

  ngOnInit() {
  }
  onSignin(values: string): any {
    const url = 'https://cheeswhiz.herokuapp.com/api/user/login';
    console.log('values', values)
    this.http.post(url, values)
      .subscribe((res: Response) => {
        this.user = res.json();
        console.log('user', this.user)
      })
  }

}
