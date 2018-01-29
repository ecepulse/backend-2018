import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';

import { QuestionBase }              from '../util/question-base';
import { QuestionControlService }    from '../services/question-control.service';

import { AuthService } from '../services/auth.service';

import { WorkshopPreferences } from '../util/workshop_preferences';
import * as firebase from 'firebase';
import * as _ from "lodash";

@Component({
  selector: 'app-workshops-registration',
  templateUrl: './workshops-registration.component.html',
  styleUrls: ['./workshops-registration.component.scss']
})
export class WorkshopsRegistrationComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService, private authService: AuthService) { }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  checkPreferences() {
      let preferences: Array<string> =
      [
        this.form.value['first_workshop_preference'].toString(),
        this.form.value['second_workshop_preference'].toString(),
        this.form.value['third_workshop_preference'].toString(),
        this.form.value['fourth_workshop_preference'].toString()
      ].filter(String);
      let uniques = _.uniq(preferences).filter(String);
      if(uniques.length == preferences.length)
          return true;
      else
          return false;
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
    const data: WorkshopPreferences = {
        uid: firebase.auth().currentUser.uid,
        firstWorkshopPreference: this.form.value['first_workshop_preference'].toString(),
        secondWorkshopPreference: this.form.value['second_workshop_preference'].toString(),
        thirdWorkshopPreference: this.form.value['third_workshop_preference'].toString(),
        fourthWorkshopPreference: this.form.value['fourth_workshop_preference'].toString(),
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    };
    return this.authService.updateWorkshopPreferences(data);
  }

}
