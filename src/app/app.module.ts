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
import { UploadService } from './services/upload.service';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';

import {environment} from "../environments/environment";
import {AngularFireModule} from "angularfire2";
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {CoreModule} from "./core/core.module";

import { DynamicQuestionComponent } from './dynamic-question/dynamic-question.component';
import { UploadFormComponent } from './upload-form/upload-form.component';
import {QuestionControlService} from "./services/question-control.service";
import {QuestionSupplierService} from "./services/question-supplier.service";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

//Define the routes
const appRoutes: Routes = [
    //If no path then it would redirected to sign-in
    {path: '', redirectTo: '/sign-in', pathMatch: 'full' },
    //Sign-in
    {path: 'sign-in', component: SignInComponent},
    //Sign-up
    {path: 'sign-up', component: SignUpComponent},
    //Forgot-password
    {path: 'forgot-password', component: ForgotPasswordComponent},
    //Home
    {path: 'home', component: HomeComponent, canActivate:[AuthGuardService]}
];

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    HomeComponent,
    RegistrationComponent,
    ForgotPasswordComponent,
    DynamicQuestionComponent,
    UploadFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    CoreModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [AuthService, AuthGuardService, QuestionControlService, QuestionSupplierService, UploadService],
  bootstrap: [AppComponent]
})

export class AppModule { }
