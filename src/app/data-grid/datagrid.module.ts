import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { OlympiadMaterialModule } from './material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from "@clr/angular";
import { CommonModule } from '@angular/common';
import { DataGridComponent } from './datagrid.component';

@NgModule({
  declarations: [
    DataGridComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  exports: [DataGridComponent]
})
export class DataGridModule { }
