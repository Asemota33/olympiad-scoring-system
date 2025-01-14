import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchupsComponent } from './matchups/matchups.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { BasketballComponent } from './basketball/basketball.component';
import { GenerateMatchupsComponent } from './generate-matchups/generate-matchups.component';
import { PointsScoreboardComponent } from './points-scoreboard/points-scoreboard.component';
import { ScoreProgressionComponent } from './score-progression/score-progression.component';

const routes: Routes = [
  {path: 'scoreboard', component: ScoreboardComponent, },
  {path: 'points', component: PointsScoreboardComponent, },
  {path: 'score-progression', component: ScoreProgressionComponent, },
  {
    path: 'matchups', 
    component: MatchupsComponent,
    children: [
      {path: 'generate-matchups', component: GenerateMatchupsComponent, outlet: "matchups"},
      {path: 'basketball', component: BasketballComponent, outlet: "matchups"},
    ],
    
  },

  {path: '', redirectTo: '/scoreboard', pathMatch: 'full', },
  {path: '**', redirectTo: '/scoreboard', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
