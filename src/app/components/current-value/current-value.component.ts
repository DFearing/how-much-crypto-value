import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

import { AppService } from '../../app.service';
import { Currency } from '../../models/currency.model';

@Component({
  selector: 'app-current-value',
  templateUrl: './current-value.component.html',
  styleUrls: ['./current-value.component.css']
})
export class CurrentValueComponent implements OnInit {
  private currentValue: number = 0;

  constructor(private appService: AppService) { 

  }

  ngOnInit() {
    this.appService.valueChanged.subscribe(x => {
      this.currentValue = x;
    });
  }
}