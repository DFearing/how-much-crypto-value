import { Component, OnInit, Input } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

import { AppService } from '../../app.service';
import { Holding } from '../../models/holding.model';
import { AddEditHoldingComponent } from "../add-edit-holding/add-edit-holding.component";

@Component({
  selector: 'app-holding-card',
  templateUrl: './holding-card.component.html',
  styleUrls: ['./holding-card.component.css']
})
export class HoldingCardComponent {
  @Input()
  public holding: Holding;

  constructor(private appService: AppService, private dialog: MdDialog) {

  }

  public edit(): void {
    let dialogRef = this.dialog.open(AddEditHoldingComponent, {
      data: this.holding,
      height: '200px',
      width: '450px',
    });

    dialogRef.afterClosed().subscribe((result: Holding) => {
      if (result) {
        if (result.quantity > 0) {
          this.appService.updateHolding(this.holding, new Holding(result.base, result.quantity));
        }
      }
    });
  }
}