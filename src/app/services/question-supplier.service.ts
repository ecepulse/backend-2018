import { Injectable } from '@angular/core';

import { AutocompleteQuestion } from '../util/question-autocomplete';
import { TextboxQuestion } from '../util/question-textbox';
import { CheckboxQuestion }  from '../util/question-checkbox';
import { RadioQuestion } from '../util/question-radio';
import { QuestionBase } from '../util/question-base';

@Injectable()
export class QuestionSupplierService {

  constructor() { }

  getQuestions() {
    let questions: QuestionBase<any>[] = [
      new TextboxQuestion({
        key: 'first_name',
        label: 'First name',
        required: true,
        order: 1
      }),
      new TextboxQuestion({
        key: 'last_name',
        label: 'Last name',
        required: true,
        order: 2
      }),
      new TextboxQuestion({
        key: 'email',
        label: 'Email',
        required: true,
        type: 'email',
        order: 3
      }),
      new RadioQuestion({
        key: 'applicant_type',
        label: 'Applicant type',
        required: true,
        options: [
          {key: 'ustu', value: 'UIUC Undergraduate Student'},
          {key: 'gstu', value: 'UIUC Graduate Student'},
          {key: 'prof', value: 'UIUC Professor'},
          {key: 'other', value: 'Other'}
        ],
        order: 4
      }),
      new AutocompleteQuestion({
        key: 'major',
        label: 'Major',
        required: true,
        options: ['Computer Engineer',
          'Electrical Engineer',
          'Computer Science'
        ],
        order: 5
      }),
      new TextboxQuestion({
        key: 'grad_year',
        label: 'Graduation year',
        required: true,
        type: 'number',
        order: 6
      }),
      new AutocompleteQuestion({
        key: 'dept',
        label: 'Department',
        required: true,
        options: ['Electrical and Computer Engineering', 'Computer Science'],
        order: 7
      }),
      new RadioQuestion({
        key: 'shirt_size',
        label: 'Shirt Sizes',
        options: [
          {key: 's', value: 'S'},
          {key: 'm', value: 'M'},
          {key: 'l', value: 'L'},
          {key: 'xl', value: 'XL'}
        ],
        order: 8
      }),
      new CheckboxQuestion({
        key: 'diet',
        label: 'Diet restrictions',
        options: [
          {key: 'none', value: 'None'},
          {key: 'veg', value: 'Vegetarian'},
          {key: 'vegan', value: 'Vegan'},
          {key: 'glu_free', value: 'Gluten Free'},
          {key: 'other', value: 'Other'}
        ],
        order: 9
      }),
      new RadioQuestion({
        key: 'gender',
        label: 'Gender',
        options: [
          {key: 'female', value: 'Female'},
          {key: 'male', value: 'Male'},
          {key: 'transgen', value: 'Transgender'},
          {key: 'other', value: 'Other'},
          {key: 'dnwts', value: 'Do not wish to specify'}
        ],
        order: 10
      }),
      new TextboxQuestion({
        key: 'age',
        label: 'Age',
        type: 'number',
        order: 11
      }),
      new TextboxQuestion({
        key: 'github',
        label: 'Github',
        order: 12
      }),
      new TextboxQuestion({
        key: 'linkedin',
        label: 'LinkedIn',
        order: 13
      }),
      new CheckboxQuestion({
        key: 'prof_int',
        label: 'Professional interest',
        options: [
          {key: 'intern', value: 'Internship'},
          {key: 'fulltime', value: 'Fulltime'},
          {key: 'fs', value: 'Further studies (Academic)'}
        ],
        order: 14
      }),
      new CheckboxQuestion({
        key: 'prev_pulse',
        label: 'How did you hear of Pulse?',
        options: [
          {key: 'pa', value: 'Previously attended'},
          {key: 'friend', value: 'Friend'},
          {key: 'posters', value: 'Posters'},
          {key: 'soc_med', value: 'Social Media'},
          {key: 'radio', value: 'Radio'},
          {key: 'other', value: 'Other'}
        ],
        order: 15
      }),
      new CheckboxQuestion({
        key: 'event_int',
        label: 'Which events are you interested in?',
        required: true,
        options: [
          {key: 'keynote', value: 'Keynote'},
          {key: 'tt', value: 'Tech Talks'},
          {key: 'workshops', value: 'Workshops'},
          //{key: 'sp', value: 'Startup Panel'},
          {key: 'comp', value: 'Competition'},
          {key: 'ss', value: 'Speaker Series'},
          {key: 'witd', value: 'Women in Tech Day'}
        ],
        order: 16
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
  
  getHsQuestions() {
    let questions: QuestionBase<any>[] = [
      new TextboxQuestion({
        key: 'first_name',
        label: 'First name',
        required: true,
        order: 1
      }),
      new TextboxQuestion({
        key: 'last_name',
        label: 'Last name',
        required: true,
        order: 2
      }),
      new TextboxQuestion({
        key: 'email',
        label: 'Email',
        required: true,
        type: 'email',
        order: 3
    }),
      new TextboxQuestion({
        key: 'age',
        label: 'Age',
        type: 'number',
        required: true,
        order: 4
    }),
      new RadioQuestion({
        key: 'grade_level',
        label: 'Grade level',
        options: [
          {key: 'fresh', value: 'Freshman'},
          {key: 'soph', value: 'Sophomore'},
          {key: 'jr', value: 'Junior'},
          {key: 'sr', value: 'Senior'}
        ],
        required: true,
        order: 5
    }),
      new TextboxQuestion({
        key: 'high_school_name',
        label: 'High school name',
        required: true,
        order: 6
    }),
      new RadioQuestion({
        key: 'workshop_session_1_preference',
        label: 'Workshop Session 1 Preference',
        options: [
          {key: 'ab', value: 'Arduino Basics'},
          {key: 'aw', value: 'API Workshop'}
        ],
        required: true,
        order: 7
    }),
      new RadioQuestion({
        key: 'workshop_session_2_preference',
        label: 'Workshop Session 2 Preference',
        options: [
        {key: 'lh', value: 'LED Hearts'},
        {key: 'psg', value: 'Python Snake Game'}
        ],
        required: true,
        order: 8
    }),
      new RadioQuestion({
        key: 'workshop_session_3_preference',
        label: 'Workshop Session 3 Preference',
        options: [
        {key: 'scl', value: 'Sound Controlled LED'},
        {key: 'rpcn', value: 'Raspberry Pi Communication Network'}
        ],
        required: true,
        order: 9
    })
    ];
    return questions.sort((a, b) => a.order - b.order);
  }

}
