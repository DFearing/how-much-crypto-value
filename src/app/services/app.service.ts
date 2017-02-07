import { OpaqueToken, Injectable, Inject } from "@angular/core";
import { Router, ActivatedRoute, NavigationExtras, Params } from "@angular/router";
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
    public targetCurrency: string = "usd";

    constructor(private router: Router, private route: ActivatedRoute, @Inject(API_SERVICE)private apiService: ApiService) {
        
    }

    public initialize(): void {
        this.route.queryParams.subscribe(x => this.parseUrl(x));

        this.apiService.getCurrencies().subscribe(x => {
            this._currencies.next(_.map(x.rows, y => { return { code: y.code.toLowerCase(), name: y.name }; }));
        });
    }

    public update(): void {
        this.updateUrl();
    }

    private changeTarget(currency: string, updateUrl: boolean = true): void {
        this.targetCurrency = currency;
        this.calculateHoldings();

        if (updateUrl) { 
            this.updateUrl();
        }
    }

    private calculateHoldings(): void {
        for(let i = 0; i < this._holdings.getValue().length; i++) {
            this.calculateHoldingValue(i, false);
        }
    }

    private addHoldings(holding: Holding = null): void {
        var current = this._holdings.getValue();
        current.push(holding || new Holding());

        this._holdings.next(current);
    }

    private calculateHoldingValue(index: number, updateUrl: boolean = true) : void {
        var current = this._holdings.getValue();

        this.apiService.getTickerData(current[index].base, this.targetCurrency).subscribe(result => {
            if (result.success) {
                // Update Holding's Value
                current[index].value = current[index].quantity * result.ticker.price;
                current[index].displayValue = this.formatMoney(current[index].value, this.targetCurrency);
                
                // Update Total
                this.total = _.reduce(this._holdings.getValue(), (memo: number, x: Holding) => memo + x.value, 0);
                this.displayTotal = this.formatMoney(this.total, this.targetCurrency);
            }
        });
    }

    private formatMoney(value: number, symbol: string): string {
        return accounting.formatMoney(value, { symbol: symbol.toUpperCase(), format: "%v %s" });
    }

    private parseUrl(params: Params): void {
        this._holdings.next([]);

        if (params["t"]) {
            this.changeTarget(params["t"].toLowerCase(), false);
        }

        for(var i = 0; i < 100; i++) {
            if (params[`b${i}`] && params[`q${i}`]) {
                this.addHoldings(new Holding(params[`b${i}`].toLowerCase(), params[`q${i}`]));
            } else {
                i = 100;
            }
        }

        this.calculateHoldings();
    }

    private updateUrl(): void {
        let navigationExtras: NavigationExtras = {
            queryParams: { "t": this.targetCurrency },
            preserveQueryParams: false
        };

        this._holdings.getValue().forEach((holding, index) => {
            navigationExtras.queryParams[`b${index}`] = holding.base;
            navigationExtras.queryParams[`q${index}`] = holding.quantity;
        });

        this.router.navigate(["/"], navigationExtras);
    }
}