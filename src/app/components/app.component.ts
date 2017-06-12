import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Observable } from 'rxjs/Rx';
import { Router, ActivatedRoute, NavigationExtras, Params } from '@angular/router';

import { AppService } from '../app.service';
import { AddEditHoldingComponent } from "./add-edit-holding/add-edit-holding.component";
import { Holding } from "../models/holding.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private route: ActivatedRoute, private dialog: MdDialog, private appService: AppService) {
    
  }

  public ngOnInit(): void {
    this.route.queryParams.subscribe(x => this.appService.parseUrl(x));
  }

  private addHolding(): void {
    let base = '';
    let quantity = 0;
    let holding = new Holding('btc', 0);

    let dialogRef = this.dialog.open(AddEditHoldingComponent, {
      data: holding,
      height: '200px',
      width: '450px',
    });

    dialogRef.afterClosed().subscribe((result: Holding) => {
      if (result) {
        if (result.quantity > 0) {
          this.appService.addHolding(new Holding(result.base, result.quantity));
        }
      }
    });
  }
}