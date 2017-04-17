export class AuthService {
  signupUser(email: string, password: 'string') {
    // .createUserWithEmailAndPassword(email, password)
    //   .catch(
    //     error => console.log(error)
    //   )
  }
  loggedIn = false

  isAuthenticated() {
    const promise = new Promise (
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn)
        },800);
      }
    );
    return promise;
  }

  login() {
    this.loggedIn = true;
  }
  logout() {
    this.loggedIn = false;
  }
}
