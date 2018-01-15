import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router  } from '@angular/router';
import { AuthService } from './auth.service';

// @Injectable()
// export class AuthGuardService implements CanActivate {
// 
//   constructor(private authService : AuthService) { }
// 
//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
//     return this.authService.isAuthenticated();
//   }
// 
// }

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;

    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (this.authService.isAuthenticated()) { return true; }

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    // Navigate to the login page with extras
    this.router.navigate(['/sign-in']);
    return false;
  }
}