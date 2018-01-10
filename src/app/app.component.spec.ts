import { TestBed, async } from '@angular/core/testing';
import { Routes, RouterModule } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';

import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserDynamicTestingModule} from "@angular/platform-browser-dynamic/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {NgModule} from "@angular/core";

//Define the routes
const appRoutes: Routes = [
  //If no path then it would redirected to sign-in
  {path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  //Sign-in
  {path: 'sign-in', component: SignInComponent},
  //Sign-up
  {path: 'sign-up', component: SignUpComponent},
  //Home
  {path: 'home', component: HomeComponent}
];

describe('AppComponent', () => {
  // TODO: Make test cases a lot cleaner
  @NgModule({
    imports: [ReactiveFormsModule, BrowserModule],
    declarations: [SignInComponent,SignUpComponent,HomeComponent],
    exports:      [SignInComponent,SignUpComponent,HomeComponent, ReactiveFormsModule],
    providers:     [AuthService, AuthGuardService]
  })
  class MockModule { }
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
          MockModule,
        RouterTestingModule.withRoutes(appRoutes)
      ]
    });

    TestBed.overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [ AppComponent ]
      },
    });
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Pulse Application Portal');
  }));
});
