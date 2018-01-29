import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

import * as _ from "lodash";

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
  constructor(private authService: AuthService) { }
  payload = [];

  ngOnInit() {
      var cb = (data: any) => {
          _.forIn(data, (value:any, key:string) => {
              this.payload.push(key + ': ' + value);
          });
      };
      this.authService.getUserRegistration(cb);
      this.authService.getWorkshopRegistration(cb);
  }

}
