import { Component, ViewChild, ElementRef } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from "@angular/http";
import * as d3 from "d3";
import { Observable } from "rxjs/Rx";

const GET_CURRENCY_URL: string = "https://www.cryptonator.com/api/currencies";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    private containerWidth: number;
    private svg: any;
    private headers: Headers;
    private currencies: { code: string, name: string }[];
    private selectedCode: string = "USD";

    title = 'app works!';

    @ViewChild("container")
    container: ElementRef;

    constructor(private http: Http) {
        //this.headers = new Headers({ 'Content-Type': 'application/json' });
    }

    ngAfterViewInit(): void {
        //this.initializeSvg(500);

        this.get<{ rows: [{ code: string, name: string }] }>(GET_CURRENCY_URL).subscribe(x => {
            this.currencies = x.rows;
        });
    }

    get<TReturnType>(url: string): Observable<TReturnType> {
        return this.http.get(url, new RequestOptions({ headers: this.headers, body: "" }))
            .map(res => <TReturnType>res.json())
            .catch(x => Observable.throw(x));
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