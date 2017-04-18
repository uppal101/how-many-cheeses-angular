import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SignUpService {
  constructor(private http: Http){}
  signUpUser(email: string, password: string) {
    return this.http.post('https://cheeswhiz.herokuapp.com/api/user/register', email, password)
  }
}
