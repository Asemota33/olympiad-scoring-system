import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-datagrid',
  templateUrl: './generic-datagrid.component.html',
  styleUrl: './generic-datagrid.component.scss'
})
export class GenericDatagridComponent implements OnInit{
  
  users: any;
  @Input() dataList: any;
  @Input() columnHeaders: string[] = [];
  colors: string[] = ["orange", "blue", "yellow", "red", "pink", "grey", "purple", "green"];
  keys: any;
  
  ngOnInit(): void {
    this.getObjectKeys();

  }

  getObjectKeys() {
    const dataListObject = this.dataList[0];
    this.keys = Object.keys(dataListObject);
  }

  isStringInArray(str: string): boolean {
    return this.colors.includes(str);
  }
}
