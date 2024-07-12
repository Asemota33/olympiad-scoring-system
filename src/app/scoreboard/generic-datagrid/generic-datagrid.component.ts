import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { map, Observable, timer } from 'rxjs';

@Component({
  selector: 'app-generic-datagrid',
  templateUrl: './generic-datagrid.component.html',
  styleUrl: './generic-datagrid.component.scss'
})
export class GenericDatagridComponent implements OnInit, OnChanges{
  
  users: any;
  @Input() dataList: Observable<any> | undefined;
  @Input() columnHeaders: string[] = [];
  colors: string[] = ["orange", "blue", "yellow", "red", "pink", "grey", "gray", "purple", "green"];
  keys: any;
  dataArray = [];
  
  ngOnInit(): void {
    this.getObjectKeys();   
  }

  ngOnChanges() {
    this.dataList?.pipe(
      map((results: any) => {
        return results
      })).subscribe(mappedResults => {
        this.dataArray = mappedResults
      })
  }

  getObjectKeys() {
    if(this.dataList) {
      const dataListObject = this.dataArray[0];
      this.keys = Object.keys(dataListObject);
    }
  }

  isStringInArray(str: string | number): boolean {
    const returnVal = (typeof str === 'string') ? this.colors.includes(str.toLowerCase()) : false;
    return returnVal;
  }
}
