import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { MatchupsComponent } from './matchups/matchups.component';
import { MatchupResultsComponent } from './matchup-results/matchup-results.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
// import { OlympiadMaterialModule } from './material-module';
import { ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from "@clr/angular";
import { BasketballModule } from './basketball/basketball.module';
import { GenerateMatchupsModule } from './generate-matchups/generate-matchups.module';
import { GenericDatagridComponent } from './scoreboard/generic-datagrid/generic-datagrid.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ScoreboardComponent,
    MatchupsComponent,
    MatchupResultsComponent,
    GenericDatagridComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    ReactiveFormsModule,
    AppRoutingModule, BasketballModule,
    GenerateMatchupsModule,
    HttpClientModule 
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
