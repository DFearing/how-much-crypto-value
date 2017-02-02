import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CurrencySelectorComponent } from './currency-selector.component';
import { HoldingsInputComponent } from './holdings-input.component';

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
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }