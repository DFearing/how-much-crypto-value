import { Component, ViewChild, ElementRef, Inject } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from "@angular/http";
import * as d3 from "d3";
import { Observable } from "rxjs/Rx";
import * as accounting from "accounting";

import { API_SERVICE, ApiService } from "./api.service";

const GET_CURRENCY_URL: string = "https://www.cryptonator.com/api/currencies";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    private total = 0;
    private containerWidth: number;
    private svg: any;
    private currencies: { code: string, name: string }[];
    private selectedCode: string = "USD";
    private displayTotal: string = "0";

    @ViewChild("container")
    container: ElementRef;

    constructor(@Inject(API_SERVICE)private apiService: ApiService) {

    }

    ngAfterViewInit(): void {
        //this.initializeSvg(500);

        this.apiService.getCurrencies().subscribe(x => {
            this.currencies = x.rows;
        });
    }

    updateTotal(total: number): void {
        this.total = total;
        this.displayTotal = accounting.formatMoney(total);
    }

    initializeSvg(height: number, width: number = null): void {
        let bounds = this.container.nativeElement.getBoundingClientRect();
        this.containerWidth = width ? width : Math.floor(bounds.width);

        this.svg = d3.select(this.container.nativeElement)
            .append("svg")
            .attr("width", this.containerWidth)
            .attr("height", height)
            .append("g");
    }
}