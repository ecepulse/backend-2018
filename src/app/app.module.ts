import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { RegistrationComponent } from './registration/registration.component';

//Define the routes
const appRoutes: Routes = [
    //If no path then it would redirected to sign-in
    {path: '', redirectTo: '/sign-in', pathMatch: 'full' },
    //Sign-in
    {path: 'sign-in', component: SignInComponent},
    //Sign-up
    {path: 'sign-up', component: SignUpComponent},
    //Home
    {path: 'home', component: HomeComponent, canActivate:[AuthGuardService]}
];

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    HomeComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})

export class AppModule { }
