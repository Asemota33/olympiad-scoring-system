import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchupsComponent } from './matchups/matchups.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { BasketballComponent } from './basketball/basketball.component';

const routes: Routes = [
  {path: 'scoreboard', component: ScoreboardComponent},
  {path: 'matchups', component: MatchupsComponent},
  {path: 'matchups', component: MatchupsComponent},
  {path: 'basketball', component: BasketballComponent},
  {path: '', redirectTo: '/scoreboard', pathMatch: 'full'},
  {path: '**', component: MatchupsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
