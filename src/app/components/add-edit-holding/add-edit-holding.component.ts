import { Component, Inject } from '@angular/core';
import { MD_DIALOG_DATA, MdDialogRef } from '@angular/material';
import { Holding } from '../../models/holding.model';
import { Currency } from '../../models/currency.model';

@Component({
  selector: 'app-crypto-holding',
  templateUrl: './add-edit-holding.component.html',
  styleUrls: ['./add-edit-holding.component.css']
})
export class AddEditHoldingComponent {
  private holding: Holding;

  constructor(@Inject(MD_DIALOG_DATA) public data: any, public dialogRef: MdDialogRef<AddEditHoldingComponent>) {
    this.holding = new Holding(data.base, data. quantity);
  }

  private updateCurrency(currency: Currency): void {
    this.holding.base = currency.code;
  }

  private save(): void {
    this.dialogRef.close(this.holding);
  }
}