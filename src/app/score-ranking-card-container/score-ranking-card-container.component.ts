import { Component } from '@angular/core';
import { IGameResults } from '../interfaces/all-interfaces.interface';
import { ScoreboardService } from '../services/scoreboard.service';


@Component({
  selector: 'app-score-ranking-card-container',
  templateUrl: './score-ranking-card-container.component.html',
  styleUrl: './score-ranking-card-container.component.scss'
})
export class ScoreRankingCardContainerComponent {

  ELEMENT_DATA: any[] = [];

  constructor(private scoreboardService: ScoreboardService) {

    this.scoreboardService.getGameResults().subscribe(gameScores => {
      this.ELEMENT_DATA = this.transformGameResults(gameScores)
    })
  }

  transformGameResults(gameRankings: IGameResults[]) {
      const transformedGameResults = gameRankings
      .map((team) => (
      [
        {game: team.game, team: team.first},
        {game: team.game, team: team.second},
        {game: team.game, team: team.third},
        // {game: team.game, team: team.fourth},
      ]
    ));
      return transformedGameResults;
    }

}
