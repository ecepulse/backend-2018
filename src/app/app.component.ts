import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Pulse Application Portal';

  constructor(private authService : AuthService) {

  }

  ngOnInit() {
    /*firebase.initializeApp({
      apiKey: "<API_KEY>",
      authDomain: "<PROJECT_ID>.firebaseapp.com",
      databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
      storageBucket: "<BUCKET>.appspot.com",
    });*/
  }

  onLogout() {
    this.authService.logout();
  }

  checkUserLoggedIn() {
    return !!localStorage.getItem('isLoggedIn');
  }
}
