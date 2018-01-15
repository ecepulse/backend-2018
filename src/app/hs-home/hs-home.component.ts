import { Component, OnInit } from '@angular/core';

import { QuestionSupplierService } from '../services/question-supplier.service';

@Component({
  selector: 'app-hs-home',
  templateUrl: './hs-home.component.html',
  styleUrls: ['./hs-home.component.scss']
})
export class HsHomeComponent implements OnInit {
  questions: any[];

  constructor(service: QuestionSupplierService) {
    this.questions = service.getHsQuestions();
  }

  ngOnInit() {
  }

}
