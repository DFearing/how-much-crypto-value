import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs/Rx';
import { Params, Router, NavigationExtras } from '@angular/router';
import * as _ from "underscore";

import { ApiService } from './api.service';
import { Holding } from './models/holding.model';
import { CURRENCY_LIST } from './currency-list.constant';
import { Currency } from './models/currency.model';
  
const BASE_TARGET: string = "usd";

@Injectable()
export class AppService {
  private holdings: Holding[] = [];
  private value: number = 0;

  private valueChange: Subject<number> = new Subject<number>();
  public valueChanged: Observable<number> = this.valueChange.asObservable();

  private currencySubject: BehaviorSubject<Currency[]> = new BehaviorSubject<Currency[]>(CURRENCY_LIST);
  public currencyList: Observable<Currency[]> = this.currencySubject.asObservable();

  private holdingSubject: BehaviorSubject<Holding[]> = new BehaviorSubject<Holding[]>([]);
  public holdingList: Observable<Holding[]> = this.holdingSubject.asObservable();

  constructor(private router: Router, private apiService: ApiService) {

  }

  public addHolding(holding: Holding): void {
    this.holdings.push(holding);
    this.holdingSubject.next(this.holdings);
    this.updateUrl();
  }

  public removeHolding(holding: Holding): void {
    this.holdings = _.reject(this.holdings, (x: Holding) => x.base == holding.base && x.quantity == holding.quantity);
    this.holdingSubject.next(this.holdings);
    this.updateUrl();
  }

  public updateHolding(source: Holding, holding: Holding): void {
    let target = _.findWhere<Holding>(this.holdings, { quantity: source.quantity, base: source.base });

    target.quantity = holding.quantity;
    target.base = holding.base;

    this.holdingSubject.next(this.holdings);
    this.updateUrl();
  }

  private calculateValue(): void {
    this.value = 0;

    this.holdings.forEach(holding => {
      this.apiService.getTickerData(holding.base, BASE_TARGET).subscribe(result => {

        if (result.success) {
          holding.price = result.ticker.price;
          holding.value = holding.quantity * holding.price;
          this.value += holding.value;
          this.valueChange.next(this.value);
        }
      });
    });
  }

  public parseUrl(params: Params): void {
    this.holdings = [];

    for (var i = 0; i < 100; i++) {
        if (params[`b${i}`] && params[`q${i}`]) {
            this.holdings.push(new Holding(params[`b${i}`].toLowerCase(), params[`q${i}`]));
        } else {
            i = 100;
        }
    }

    this.holdingSubject.next(this.holdings);
    this.calculateValue();
  }

  private updateUrl(): void {
    let navigationExtras: NavigationExtras = {
        queryParams: { },
        preserveQueryParams: false
    };

    this.holdings.forEach((holding, index) => {
        navigationExtras.queryParams[`b${index}`] = holding.base;
        navigationExtras.queryParams[`q${index}`] = holding.quantity;
    });

    this.router.navigate(["/"], navigationExtras);
  }
}