import { Component, Input, OnInit }  from '@angular/core';
import {FormGroup, Validators, FormControl}                 from '@angular/forms';

import { QuestionBase }              from '../util/question-base';
import { QuestionControlService }    from '../services/question-control.service';

import { AuthService } from '../services/auth.service';
import { UploadService } from '../services/upload.service';

import { User } from '../util/user';
import {AngularFirestoreDocument, AngularFirestore} from "angularfire2/firestore";
import { AngularFireAuth } from 'angularfire2/auth';
import {Observable} from "rxjs";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';
  private translator: any = {
    email: 'email',
    first_name: 'firstName',
    last_name: 'lastName',
    applicant_type: 'applicantType',
    major: 'major',
    grad_year: 'graduationYear',
    shirt_size: 'shirtSize',
    diet: 'diet',
    gender: 'gender',
    age: 'age',
    github: 'github',
    linkedin: 'linkedIn',
    prof_int: 'professionalInterest',
    prev_pulse: 'previousPulse',
    event_int: 'eventInterest'
  }

  constructor(private afAuth: AngularFireAuth, private qcs: QuestionControlService, private authService: AuthService, private uploadService: UploadService, private afs : AngularFirestore) { }

  ngOnInit() {
    let thing = this;
    this.afAuth.authState.subscribe((authData) => {
    const user: AngularFirestoreDocument<any> = this.afs.doc(`users/${authData.uid}`);
    const data: Observable<any> = user.valueChanges();
    data.subscribe((dataObject) => {
        // console.log(dataObject);
        for ( let question of this.questions) {
        // console.log(question.key)
          question.value = dataObject[thing.translator[question.key]];
        }
        this.form = this.qcs.toFormGroup(this.questions);
    });
    });
  }

  fileUploaded() {
    return this.uploadService.hasSuccessfullyUploaded();
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
      shirtSize: this.form.value['shirt_size'].toString(),
      diet: this.form.value['diet'],
      gender: this.form.value['gender'].toString(),
      github: this.form.value['github'].toString(),
      linkedIn: this.form.value['linkedin'].toString(),
      professionalInterest: this.form.value['prof_int'],
      previousPulse: this.form.value['prev_pulse'],
      eventInterest: this.form.value['event_int']
    };
    if (this.form.value['age'] != "")
      data.age = parseInt(this.form.value['age'].toString()) || 0;
    return this.authService.updateUserRegistration(data);
  }
}
