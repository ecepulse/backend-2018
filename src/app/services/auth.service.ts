import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  constructor(private router : Router) { }

  signUp(email: string, password: string){
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((response) => console.log("Successful Sign up"),
            (error) => console.log(error))
***REMOVED***

  signIn(email: string, password: string){
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
            (response) => {
              this.router.navigate(['home']);
              this.getCurrentUserToken();

          ***REMOVED***,
            (error) => console.log(error)
        );
***REMOVED***

  logout() {
    firebase.auth().signOut();
    localStorage.removeItem('isLoggedIn');
***REMOVED***

  getCurrentUserToken() {
    firebase.auth().currentUser.getToken()
        .then(
            (token: string) => {
              localStorage.setItem('isLoggedIn', token);
          ***REMOVED***
        );
    localStorage.getItem('isLoggedIn');
***REMOVED***

  isAuthenticated() {
    return !!localStorage.getItem('isLoggedIn');
***REMOVED***

}
