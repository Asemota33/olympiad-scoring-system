import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { PointsScoreboardComponent } from './points-scoreboard/points-scoreboard.component';
import { ScoreProgressionComponent } from './score-progression/score-progression.component';

const routes: Routes = [
  {path: 'scoreboard', component: ScoreboardComponent, },
  {path: 'points', component: PointsScoreboardComponent, },
  {path: 'score-progression', component: ScoreProgressionComponent, },
  {
    path: 'matchups', 
    component: ScoreProgressionComponent,
  },

  {path: '', redirectTo: '/scoreboard', pathMatch: 'full', },
  {path: '**', redirectTo: '/scoreboard', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
