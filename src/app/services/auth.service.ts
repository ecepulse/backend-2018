import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap'

interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  age?: string;
}

@Injectable()
export class AuthService {

  user: Observable<User>;

  constructor(private router : Router, private afAuth : AngularFireAuth, private afs : AngularFirestore) {
    this.user = this.afAuth.authState
      .switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
      ***REMOVED*** else {
          return Observable.of(null)
      ***REMOVED***
    ***REMOVED***);
***REMOVED***

  signUp(email: string, password: string){
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then((response) => {
              console.log("Successful Sign up");
              console.log(response.user);
          ***REMOVED***,
            (error) => console.log(error))
***REMOVED***

  signIn(email: string, password: string){
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(
            (response) => {
              console.log(response);
              this.router.navigate(['home']);
              this.getCurrentUserToken();
              this.updateUserLoginData(response.uid, response.email).then(
                (resp) => console.log(resp),
                (err) => console.log(err)
              );
          ***REMOVED***,
            (error) => console.log(error)
        );
***REMOVED***

  forgotPassword(email: string){
    this.afAuth.auth.sendPasswordResetEmail(email)
      .then(
        (response) => {
          if (this.isAuthenticated()) {
            this.logout();
        ***REMOVED***
          console.log("Successfully reset password");
      ***REMOVED***,
        (error) => console.log(error)
      );
***REMOVED***

  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        this.updateUserOAuthData(credential.user)
    ***REMOVED***)
***REMOVED***

  private updateUserLoginData(uid, email) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${uid}`);
    const data: User = {
      uid: uid,
      email: email
  ***REMOVED***;
    return userRef.set(data)
***REMOVED***

  private updateUserOAuthData(user) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
  ***REMOVED***;
    return userRef.set(data)
***REMOVED***

  logout() {
    this.afAuth.auth.signOut();
    localStorage.removeItem('isLoggedIn');
***REMOVED***

  getCurrentUserToken() {
    this.afAuth.auth.currentUser.getIdToken()
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
