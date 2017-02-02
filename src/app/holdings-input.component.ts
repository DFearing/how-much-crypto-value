import { Component, ViewChild, ElementRef, Input } from '@angular/core';
import * as d3 from "d3";

@Component({
    selector: 'holdings-input',
    templateUrl: './holdings-input.component.html'
})
export class HoldingsInputComponent {
    @Input()
    currencies: { code: string, name: string }[];

    holdings: { base: string, quantity: number }[] = [ 
        { base: "BTC", quantity: 0 },
        { base: "ETH", quantity: 0 },
        { base: "XMR", quantity: 0 },
    ];
}