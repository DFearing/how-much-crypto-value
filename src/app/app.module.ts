import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app.component';
import { CurrencySelectorComponent } from './components/currency-selector.component';
import { HoldingsInputComponent } from './components/holdings-input.component';

import { API_SERVICE, ApiService } from "./services/api.service";
import { APP_SERVICE, AppService } from "./services/app.service";

@NgModule({
    declarations: [
        AppComponent,
        CurrencySelectorComponent,
        HoldingsInputComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [
        { provide: APP_SERVICE, useClass: AppService },
        { provide: API_SERVICE, useClass: ApiService }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }