import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Pulse Application Portal';
  token: string;

  constructor(private authService : AuthService, private router : Router) {

***REMOVED***

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "<API_KEY>",
      authDomain: "<PROJECT_ID>.firebaseapp.com",
      databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
      storageBucket: "<BUCKET>.appspot.com",
  ***REMOVED***);
***REMOVED***

  onLogout() {
    this.authService.logout();
***REMOVED***

  checkUserLoggedIn() {
    return !!localStorage.getItem('isLoggedIn');
***REMOVED***
}
