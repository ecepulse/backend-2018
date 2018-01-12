import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit() {
    this.signupForm = new FormGroup ({
      'email': new FormControl(null, Validators.required),
      'pass': new FormControl(null, Validators.required)
    });
  }

  signup(){
    this.authService.signUp(this.signupForm.value.email, this.signupForm.value.pass);
    this.router.navigate(['/sign-in']);
  }

  isInvalid() {
    return !this.authService.getSignUpStatus();
  }

  getError() {
    return this.authService.getSignUpError();
  }

}
