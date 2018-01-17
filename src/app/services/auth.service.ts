import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { User } from '../util/user';

@Injectable()
export class AuthService {

  user: Observable<User>;
  loginStatus: boolean = true;
  loginError: string = "";
  signUpStatus: boolean = true;
  signUpError: string = "";
  forgotEmailStatus: boolean = true;
  forgotEmailError: string = "";
  redirectUrl: string = "";

  constructor(private router : Router, private afAuth : AngularFireAuth, private afs : AngularFirestore) {
    this.user = this.afAuth.authState
      .switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
        } else {
          return Observable.of(null)
        }
      });
  }

  getLoginStatus() {
    return this.loginStatus;
  }

  getLoginError() {
    return this.loginError;
  }

  getSignUpStatus() {
    return this.signUpStatus;
  }

  getSignUpError() {
    return this.signUpError;
  }

  getForgotEmailStatus() {
    return this.forgotEmailStatus;
  }

  getForgotEmailError() {
    return this.forgotEmailError;
  }

  signUp(email: string, password: string){
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then((response) => {
              console.log("Successful Sign up");
              console.log(response);
              this.signUpStatus = true;
              this.forgotEmailStatus = true;
              this.loginStatus = true;
                this.updateUserLoginData(response.uid, response.email).then(
                    (resp) => console.log(resp),
                    (err) => console.log(err)
                );
                this.router.navigate(['sign-in']);
            },
            (error) => {
              console.log(error);
              this.signUpStatus = false;
              this.signUpError = error.message;
            });
  }

  signIn(email: string, password: string){
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(
            (response) => {
              console.log(response);
              if(this.redirectUrl){
                  this.router.navigate([this.redirectUrl]);
              }
              else {
                  this.router.navigate(['home']);
              }
              this.getCurrentUserToken();
              /*this.updateUserLoginData(response.uid, response.email).then(
                (resp) => console.log(resp),
                (err) => console.log(err)
              );*/
              this.signUpStatus = true;
              this.forgotEmailStatus = true;
              this.loginStatus = true;
            },
            (error) => {
              console.log(error);
              this.loginStatus = false;
              this.loginError = error.message;
            }
        );
  }

  forgotPassword(email: string){
    return this.afAuth.auth.sendPasswordResetEmail(email)
      .then(
        (response) => {
          if (this.isAuthenticated()) {
            this.logout();
          }
          console.log("Successfully reset password");
          this.forgotEmailStatus = true;
        },
        (error) => {
          console.log(error);
          this.forgotEmailStatus = false;
          this.forgotEmailError = error.message;
        }
      );
  }

  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        this.updateUserOAuthData(credential.user)
      })
  }

  private updateUserLoginData(uid, email) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${uid}`);
    const data: User = {
      uid: uid,
      email: email
    };
    return userRef.set(data)
  }

  private updateUserOAuthData(user) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const data: User = {
      uid: user.uid,
      email: user.email,
      //displayName: user.displayName,
      photoURL: user.photoURL
    };
    return userRef.set(data)
  }

  logout() {
    this.afAuth.auth.signOut().then(() => {
        localStorage.removeItem('isLoggedIn');
        this.router.navigate(['']);
    });
  }

  getCurrentUserToken() {
    this.afAuth.auth.currentUser.getIdToken()
        .then(
            (token: string) => {
              localStorage.setItem('isLoggedIn', token);
            }
        );
    return localStorage.getItem('isLoggedIn');
  }

  updateUserRegistration(regData) {
    this.afAuth.authState.subscribe(authData => {
      let uid = authData.uid;
      const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${uid}`);
      return userRef.set(regData).then( () => {
          this.router.navigate(['confirmation']);
      });
    });
  }

  getUserRegistration(cb: (data:User) => void){
    this.afAuth.authState.subscribe(authData => {
      let uid = authData.uid;
      const userRef: AngularFirestoreDocument<User> = this.afs.doc<User>(`users/${uid}`);
      return userRef.ref.get().then(function(doc) {
      if (doc.exists) {
          cb(doc.data());
      } else {
          console.log("No such document!");
      }
      }).catch(function(error) {
          console.log("Error getting document:", error);
      });
    });

  }

  isAuthenticated() {
    return !!localStorage.getItem('isLoggedIn');
  }

}
