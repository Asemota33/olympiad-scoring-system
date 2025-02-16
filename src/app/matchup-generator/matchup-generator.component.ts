import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-matchup-generator',
  templateUrl: './matchup-generator.component.html',
  styleUrl: './matchup-generator.component.scss'
})
export class MatchupGeneratorComponent implements OnInit, OnDestroy {

  availableProducts: any[] | undefined;
  selectedProducts: any[] | undefined;
  draggedProduct: any | undefined | null;
  isBtnDisabled = true;

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.selectedProducts = [];
    this.availableProducts = [
      {id:'1', name: 'Purple'},
      {id:'2', name: 'Red'},
      {id:'3', name: 'Orange'},
      {id:'4', name: 'Yellow'},
      {id:'5', name: 'Green'},
      {id:'6', name: 'Grey'},
      {id:'7', name: 'Pink'},
      {id:'8', name: 'Blue'},
    ]
  }

  dragStart(product: any) {
    this.draggedProduct = product;
}

  drop() {
    if(!!this.selectedProducts && this.selectedProducts?.length < 2) {
      if (this.draggedProduct ) {
        let draggedProductIndex = this.findIndex(this.draggedProduct);
        this.selectedProducts = [...(this.selectedProducts as any[]), this.draggedProduct];
        this.availableProducts = this.availableProducts?.filter((val, i) => i != draggedProductIndex);
        this.draggedProduct = null;
        this.toggleBtn();
      }

    }
    else {
      this.triggerSnackBar();
    }

  }

  dragEnd() {
    this.draggedProduct = null;
  }

  findIndex(product: any) {
    let index = -1;
    for (let i = 0; i < (this.availableProducts as any[]).length; i++) {
        if (product.id === (this.availableProducts as any[])[i].id) {
            index = i;
            break;
        }
    }
    return index;
  }

  removeProduct(product: any) {
    this.availableProducts = [...(this.availableProducts as any[]), product];
    const dropZoneProductsLeft = this.selectedProducts?.filter((val) => val.id != product.id);
    this.selectedProducts = dropZoneProductsLeft;
    this.toggleBtn();
  }

  triggerSnackBar() {
    this._snackBar.open
    this._snackBar.open("You can only select 2 teams", "Close", {
      duration: 5000,
      verticalPosition: 'top',
    });

  }

  toggleBtn(){
    this.isBtnDisabled = this.selectedProducts?.length == 2 ? false : true;
  }

  ngOnDestroy() {
  }
}
