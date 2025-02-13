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
import { GameScoreCardComponent } from './game-score-card/game-score-card.component';
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
    GameScoreCardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    OlympiadMaterialModule,
    CarouselModule,
    
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
