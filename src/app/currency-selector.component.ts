import { Component, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import * as d3 from "d3";

@Component({
    selector: 'currency-selector',
    templateUrl: './currency-selector.component.html'
})
export class CurrencySelectorComponent {
    @Input()
    currencies: { code: string, name: string }[];

    @Input()
    selectedCode: string;

    @Output()
    selectedCodeChange: EventEmitter<string> = new EventEmitter<string>();
}