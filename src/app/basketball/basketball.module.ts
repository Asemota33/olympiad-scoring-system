import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { OlympiadMaterialModule } from './material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from "@clr/angular";
import { BasketballComponent } from './basketball.component';
import { CommonModule } from '@angular/common';
import { DataGridModule } from '../data-grid/datagrid.module';

@NgModule({
  declarations: [
    BasketballComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    DataGridModule
  ],
})
export class BasketballModule { }
