import { Component, OnInit } from '@angular/core';

import { QuestionSupplierService } from '../services/question-supplier.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  questions: any[];

  constructor(service: QuestionSupplierService) {
    this.questions = service.getQuestions();
  }

  ngOnInit() {
  }

}
