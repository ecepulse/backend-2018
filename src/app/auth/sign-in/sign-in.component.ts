import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signinForm: FormGroup;

  constructor(private authService : AuthService) { }

  ngOnInit() {
    this.signinForm = new FormGroup({
      'email': new FormControl(null, Validators.required),
      'pass': new FormControl(null, Validators.required),
    });
  }

  signin(){
    this.authService.signIn(this.signinForm.value.email, this.signinForm.value.pass);
  }

}
