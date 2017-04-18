import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { SignUpService } from './signup.service'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

 constructor(private authService: AuthService, private signupService: SignUpService) { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signupUser(email, password);//sets up auth service
  }
  addUser(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.signupService.signUpUser(email, password)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      )
  }

}
