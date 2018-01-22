import { Component, OnInit } from '@angular/core';

import { QuestionSupplierService } from '../services/question-supplier.service';

@Component({
  selector: 'app-workshops',
  templateUrl: './workshops.component.html',
  styleUrls: ['./workshops.component.scss']
})
export class WorkshopsComponent implements OnInit {
  questions: any[];

  constructor(service: QuestionSupplierService) {
    this.questions = service.getRegQuestions();
  }

  ngOnInit() {
  }

}
