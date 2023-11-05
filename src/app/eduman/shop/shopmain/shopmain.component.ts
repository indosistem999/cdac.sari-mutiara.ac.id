import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductpopupComponent } from '../productpopup/productpopup.component';

@Component({
  selector: 'app-shopmain',
  templateUrl: './shopmain.component.html',
  styleUrls: ['./shopmain.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ShopmainComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  productPopup() {
    this.dialog.open(ProductpopupComponent);
  }

  ngOnInit(): void {}

}
