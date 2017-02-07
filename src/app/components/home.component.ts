import { Component, Inject } from '@angular/core';

import { APP_SERVICE, AppService } from "../services/app.service";

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    constructor(@Inject(APP_SERVICE)private appService: AppService) {

    }

    ngAfterViewInit(): void {
        this.appService.initialize();
    }
}