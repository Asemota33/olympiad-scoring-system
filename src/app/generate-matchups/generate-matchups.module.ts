import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from "@clr/angular";
import { GenerateMatchupsComponent } from './generate-matchups.component';
import { CommonModule } from '@angular/common';
import { DataGridModule } from '../data-grid/datagrid.module';

@NgModule({
  declarations: [
    GenerateMatchupsComponent
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
export class GenerateMatchupsModule { }
