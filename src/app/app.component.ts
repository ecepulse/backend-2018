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
  }

  onLogout() {
    this.authService.logout();
  }

  checkUserLoggedIn() {
    return !!localStorage.getItem('isLoggedIn');
  }
}
