import { Component, Inject, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { Location } from '@angular/common';

import { APP_SERVICE, AppService } from "../services/app.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    constructor(private changeDetector: ChangeDetectorRef, @Inject(APP_SERVICE)private appService: AppService) {

    }

    ngAfterViewInit(): void {
        this.appService.initialize();
    }

    selectCurrency(currency: string): void {
        //this.appService.baseCurrency = currency;
        //this.changeDetector.detectChanges();
        //this.appService.reload();
    }
}