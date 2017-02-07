import { OpaqueToken, Injectable, Inject } from "@angular/core";
import { Subject, Observable, BehaviorSubject } from "rxjs/Rx";
import * as accounting from "accounting";
import * as _ from "underscore";

import { API_SERVICE, ApiService } from "./api.service";
import { Holding } from "../models/holding.model";
import { Currency } from "../models/currency.model";

export const APP_SERVICE: OpaqueToken = new OpaqueToken("AppService");

@Injectable()
export class AppService {
    private _currencies: BehaviorSubject<Currency[]> = new BehaviorSubject<Currency[]>([]);
    public currencies: Observable<Currency[]> = this._currencies.asObservable();

    private _holdings: BehaviorSubject<Holding[]> = new BehaviorSubject<Holding[]>([]);
    public holdings: Observable<Holding[]> = this._holdings.asObservable();

    public total: number = 0;
    public displayTotal: string = "0.00 USD";
    public targetCurrency: string = "USD";

    constructor(@Inject(API_SERVICE)private apiService: ApiService) {
        
    }

    initialize(): void {
        this.apiService.getCurrencies().subscribe(x => {
            this._currencies.next(_.map(x.rows, y => { return { code: y.code, name: y.name }; }));
        });
    }

    changeTarget(currency: string): void {
        this.targetCurrency = currency;

        for(let i = 0; i < this._holdings.getValue().length; i++) {
            this.calculateHoldingValue(i);
        }
    }

    addHoldings(): void {
        var current = this._holdings.getValue();
        current.push(new Holding());

        this._holdings.next(current);
    }

    calculateHoldingValue(index: number) : void {
        var current = this._holdings.getValue();

        this.apiService.getTickerData(current[index].base, this.targetCurrency).subscribe(result => {
            if (result.success) {
                // Update Holding's Value
                current[index].value = current[index].quantity * result.ticker.price;
                current[index].displayValue = this.formatMoney(current[index].value, this.targetCurrency);

                // Update Totals
                this.total = _.reduce(current, (memo: number, x: Holding) => memo + x.value, 0);
                this.displayTotal = this.formatMoney(this.total, this.targetCurrency);
            }
        });
    }

    formatMoney(value: number, symbol: string): string {
        return accounting.formatMoney(value, { symbol: symbol, format: "%v %s" });
    }
}