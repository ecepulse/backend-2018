import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';

import { QuestionBase }              from '../util/question-base';
import { QuestionControlService }    from '../services/question-control.service';

import { AuthService } from '../services/auth.service';

import { HighSchoolUser } from '../util/high-school-user';

@Component({
  selector: 'app-hs-registration',
  templateUrl: './hs-registration.component.html',
  styleUrls: ['./hs-registration.component.scss']
})
export class HsRegistrationComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService, private authService: AuthService) { }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
    const data: HighSchoolUser = {
      email: this.form.value['email'].toString(),
      firstName: this.form.value['first_name'].toString(),
      lastName: this.form.value['last_name'].toString(),
      gradeLevel: this.form.value['grade_level'].toString(),
      age: parseInt(this.form.value['age'].toString()) || 0,
      highSchoolName: this.form.value['high_school_name'].toString(),
      workshopSession1Preference: this.form.value['workshop_session_1_preference'].toString(),
      workshopSession2Preference: this.form.value['workshop_session_2_preference'].toString(),
      workshopSession3Preference: this.form.value['workshop_session_3_preference'].toString()
    };
    return this.authService.updateUserRegistration(data);
  }

}
