import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { MatchupsComponent } from './matchups/matchups.component';
import { MatchupResultsComponent } from './matchup-results/matchup-results.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { OlympiadMaterialModule } from './material-module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ScoreboardComponent,
    MatchupsComponent,
    MatchupResultsComponent
  ],
  imports: [
    BrowserModule,
    OlympiadMaterialModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
