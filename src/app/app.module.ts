import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";

import { ROUTES } from './app.routes';
import { AppComponent } from './components/app.component';
import { HomeComponent } from './components/home.component';
import { CurrencySelectorComponent } from './components/currency-selector.component';
import { HoldingsInputComponent } from './components/holdings-input.component';

import { API_SERVICE, ApiService } from "./services/api.service";
import { APP_SERVICE, AppService } from "./services/app.service";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        CurrencySelectorComponent,
        HoldingsInputComponent
    ],
    imports: [
        RouterModule.forRoot(ROUTES),
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