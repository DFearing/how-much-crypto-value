import { Component, Input, Inject } from "@angular/core";
import { Subject } from "rxjs/Rx";

import { APP_SERVICE, AppService } from "../services/app.service";

@Component({
    selector: 'holdings-input',
    templateUrl: './holdings-input.component.html'
})
export class HoldingsInputComponent {
    private onChange: Subject<number> = new Subject();

    constructor(@Inject(APP_SERVICE)private appService: AppService) {
        
    }

    ngAfterViewInit(): void {
        this.onChange.debounceTime(500).subscribe(index => {
            this.appService.update();
        });
    }
}