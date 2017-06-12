import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { MdOptionSelectionChange } from "@angular/material";

import { AppService } from '../../app.service';
import { Currency } from '../../models/currency.model';

@Component({
  selector: 'app-currency-selector',
  templateUrl: './currency-selector.component.html',
  styleUrls: ['./currency-selector.component.css']
})
export class CurrencySelectorComponent implements OnInit {
  @Input()
  public selected: string;

  @Output()
  public onSelectionChange: EventEmitter<Currency> = new EventEmitter<Currency>();

  private control: FormControl;
  private currencyList: Currency[];
  private filteredCurrencyList: Observable<Currency[]>;

  constructor(private appService: AppService) {
    this.control = new FormControl();
  }

  public ngOnInit(): void {
    this.appService.currencyList.subscribe(x => {
      this.currencyList = x;

      if (this.selected) {
        this.control.setValue(this.selected.toUpperCase());
      }
    });

    this.filteredCurrencyList = this.control.valueChanges
      .startWith(null)
      .map(val => this.filterCurrency(val));
  }

  private filterCurrency(val: string): Currency[] {
    return val ? this.currencyList.filter(s => s.code.indexOf(val) > -1 || s.name.indexOf(val) > -1) : this.currencyList;
  }

  private filterSelection(event: MdOptionSelectionChange, currency: Currency): void {
    if (event.source.selected) {
      this.onSelectionChange.emit(currency);
    }
  }
}