import { Component, Input, OnInit } from '@angular/core';
import { FormGroup }        from '@angular/forms';

import { QuestionBase }     from '../util/question-base';
import {Observable} from "rxjs";
import {startWith} from "rxjs/operators/startWith";
import {map} from "rxjs/operators/map";

@Component({
  selector: 'app-dynamic-question',
  templateUrl: './dynamic-question.component.html',
  styleUrls: ['./dynamic-question.component.scss']
})
export class DynamicQuestionComponent implements OnInit {
  auto_options: Observable<string[]>;

  constructor() {}

  ngOnInit() {
    if (this.question.controlType == 'autocomplete') {
      this.auto_options = this.form.controls[this.question.key].valueChanges
        .pipe(
          startWith(''),
          map(option => option ? this.autoOptions(option) : this.question.options.slice())
        );
    }
  }

  autoOptions(name: string) {
    return this.question.options.filter(option =>
    option.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }

}
