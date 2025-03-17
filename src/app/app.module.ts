import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { MatchupResultsComponent } from './matchup-results/matchup-results.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { OlympiadMaterialModule } from './material-module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PointsScoreboardComponent } from './points-scoreboard/points-scoreboard.component';
import { ScoreRankingCardComponent } from './score-ranking-card/score-ranking-card.component';
import { ScoreRankingCardContainerComponent } from './score-ranking-card-container/score-ranking-card-container.component';
import { ScoreProgressionComponent } from './score-progression/score-progression.component';
import { GameScoresCarouselComponent } from './game-scores-carousel/game-scores-carousel.component';
import { CarouselModule } from 'primeng/carousel';
import { DragDropModule } from 'primeng/dragdrop';
import { GameScoreCardComponent } from './game-score-card/game-score-card.component';
import { EditScoreProgressionComponent } from './edit-score-progression/edit-score-progression.component';
import { MatchupGeneratorComponent } from './matchup-generator/matchup-generator.component';
import { MatchupCardComponent } from './matchup-card/matchup-card.component';
import { PresentationPageComponent } from './presentation-page/presentation-page.component';
@NgModule({
  declarations: [
    AppComponent,
    ScoreboardComponent,
    MatchupResultsComponent,
    PointsScoreboardComponent,
    ScoreRankingCardComponent,
    ScoreRankingCardContainerComponent,
    ScoreProgressionComponent,
    GameScoresCarouselComponent,
    GameScoreCardComponent,
    EditScoreProgressionComponent,
    MatchupGeneratorComponent,
    MatchupCardComponent,
    PresentationPageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    OlympiadMaterialModule,
    CarouselModule,
    DragDropModule, 
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
