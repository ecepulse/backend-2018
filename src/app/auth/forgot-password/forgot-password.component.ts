import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm: FormGroup;

  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit() {
    this.forgotPasswordForm = new FormGroup({
      'email': new FormControl(null, Validators.required)
    });
  }

  forgotPassword(){
    this.authService.forgotPassword(this.forgotPasswordForm.value.email);
    this.router.navigate(['/sign-in']);
  }

}
