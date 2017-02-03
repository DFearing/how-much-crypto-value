import { Component, ViewChild, ElementRef, Input, Inject, SimpleChange, OnChanges, EventEmitter, Output } from "@angular/core";
import * as d3 from "d3";
import { Subject } from "rxjs/Rx";
import * as _ from "underscore";
import * as accounting from "accounting";

import { API_SERVICE, ApiService } from "./api.service";
import { Currency } from "./currency.model";
import { Holding } from "./holding.model";

@Component({
    selector: 'holdings-input',
    templateUrl: './holdings-input.component.html'
})
export class HoldingsInputComponent implements OnChanges {
    private onDataChange: Subject<number> = new Subject();
    private accounting: any = accounting;

    @Input()
    currencies: Currency[];

    @Input()
    baseCurrency: string;

    @Output()
    onTotalChange: EventEmitter<number> = new EventEmitter<number>();

    constructor(@Inject(API_SERVICE)private apiService: ApiService) {

    }

    ngOnChanges(changes: { [key: string]: SimpleChange; }): void {
        if (changes["baseCurrency"] && !changes["baseCurrency"].isFirstChange()) {
            for(var i = 0; i < this.holdings.length; i++) {
                this.getData(i);
            }
        }
    }

    ngAfterViewInit(): void {
        this.onDataChange.debounceTime(500).subscribe(x => {
            this.getData(x);
        });
    }

    getData(index: number): void {
        if (this.holdings[index].quantity > 0) {
            this.apiService.getTickerData(this.holdings[index].base, this.baseCurrency).subscribe(x => {
                if (x.success) {
                    var total = this.holdings[index].quantity * x.ticker.price;
                    this.holdings[index].value = total;
                    this.holdings[index].displayValue = accounting.formatMoney(total);

                    var total = _.reduce(_.map(this.holdings, (x: Holding) => x.value), (memo: number, item: number) => memo + item);
                    this.onTotalChange.emit(total);
                }
            });
        }
    }

    holdings: Holding[] = [ 
        { base: "BTC", quantity: 0, value: 0, displayValue: "0" },
        { base: "ETH", quantity: 0, value: 0, displayValue: "0" },
        { base: "XMR", quantity: 0, value: 0, displayValue: "0" }
    ];
}