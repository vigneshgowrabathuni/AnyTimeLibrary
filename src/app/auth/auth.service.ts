import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class AuthService {
  token: string;
  private errorMsg = new Subject<any>();
  private userType = new Subject<any>();
  userEmailID = '';
  constructor(private router: Router) { }

  registerUser(email: string, password: string) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error => console.log(error));

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        firebase
          .auth()
          .currentUser.getIdToken()
          .then((token: string) => {
            this.token = token;
          });
      })
      .catch(error => {
        console.log(error.message);

        this.errorMsg.next({ 'msg': error.message });
      });
  }

  loginUser(email: string, password: string) {

    if (email === 'vigneshg@gmail.com') {
      this.userType.next({ userType: 'admin' });
    } else {
      this.userType.next({ userType: 'user' });
    }
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        firebase
          .auth()
          .currentUser.getIdToken()
          .then((token: string) => {
            this.token = token;
            localStorage.setItem('token', token);
          });
        this.userEmailID = email;
        this.router.navigate(['/home']);
      })
      .catch(error => {
        this.errorMsg.next({ 'msg': error.message });
      });
  }

  getErrorMsg(): Observable<any> {
    return this.errorMsg.asObservable();
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
    this.router.navigate(['/login']);
  }

  getIdToken() {
    if (firebase
      .auth()
      .currentUser.getIdToken() !== null) {
      firebase
        .auth()
        .currentUser.getIdToken()
        .then((token: string) => {
          this.token = token;
        })
        .catch(err => (this.token = null));
      return this.token;
    } else {
      return null;
    }
  }

  getUserType(): Observable<any> {
    return this.userType.asObservable();
  }

  isAuthenticated() {
    return this.token != null;
  }

  getUserEmailID() {
    return this.userEmailID;
  }
}
