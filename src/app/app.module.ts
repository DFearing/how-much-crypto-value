import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdButtonModule, MdCheckboxModule, MdSelectModule, MdDialogModule, MdInputModule, MdAutocompleteModule, MdCardModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppRootComponent } from './components/app-root.component';
import { AppComponent } from './components/app.component';
import { CurrentValueComponent } from './components/current-value/current-value.component';
import { AppService } from './app.service';
import { ApiService } from './api.service';
import { AddEditHoldingComponent } from './components/add-edit-holding/add-edit-holding.component';
import { CurrencySelectorComponent } from './components/currency-selector/currency-selector.component';
import { HoldingCardComponent } from './components/holding-card/holding-card.component';

@NgModule({
  declarations: [
    AppRootComponent,
    AppComponent,
    CurrentValueComponent,
    AddEditHoldingComponent,
    CurrencySelectorComponent,
    HoldingCardComponent
  ],
  imports: [
    RouterModule.forRoot([{ path: "", component: AppComponent }]),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MdDialogModule,
    MdSelectModule,
    MdButtonModule,
    MdInputModule,
    NoopAnimationsModule,
    MdAutocompleteModule,
    MdCardModule,
    HttpModule
  ],
  providers: [
    ApiService,
    AppService
  ],
  bootstrap: [AppRootComponent],
  entryComponents: [
    AddEditHoldingComponent
  ]
})
export class AppModule { }