import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';

import { QuestionBase }              from '../util/question-base';
import { QuestionControlService }    from '../services/question-control.service';

import { AuthService } from '../services/auth.service';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

import { User } from '../util/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService, private authService: AuthService, private afs: AngularFirestore) { }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
    const data: User = {
      email: this.form.value['email'].toString(),
      firstName: this.form.value['first_name'].toString(),
      lastName: this.form.value['last_name'].toString(),
      applicantType: this.form.value['applicant_type'].toString(),
      major: this.form.value['major'].toString(),
      graduationYear: parseInt(this.form.value['grad_year'].toString()) || 0,
      department: this.form.value['dept'].toString(),
      shirtSize: this.form.value['shirt_size'].toString(),
      diet: this.form.value['diet'],
      gender: this.form.value['gender'].toString(),
      github: this.form.value['github'].toString(),
      linkedIn: this.form.value['linkedin'].toString(),
      professionalInterest: this.form.value['prof_int'],
      previousPulse: this.form.value['prev_pulse'],
      eventInterest: this.form.value['event_int']
      //email: user.email,
      //displayName: user.displayName,
    };
    if (this.form.value['age'] != "")
      data.age = parseInt(this.form.value['age'].toString()) || 0;
    return this.authService.updateUserRegistration(data);
  }

}
