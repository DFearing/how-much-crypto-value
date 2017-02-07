import { Component, Input, Output, EventEmitter, Inject } from '@angular/core';

import { APP_SERVICE, AppService } from "../services/app.service";

@Component({
    selector: 'currency-selector',
    templateUrl: './currency-selector.component.html'
})
export class CurrencySelectorComponent {
    @Input()
    targetCurrency: string;

    @Output()
    targetCurrencyChange: EventEmitter<string> = new EventEmitter<string>();

    constructor(@Inject(APP_SERVICE)private appService: AppService) {
        
    }
}