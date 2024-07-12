import { Component } from '@angular/core';
import { Observable, timer, of } from 'rxjs';
import { teamPoints, transformedGameResults } from '../interfaces/all-interfaces.interface';
import { ScoreboardService } from '../services/scoreboard.service';

@Component({
  selector: 'app-points-scoreboard',
  templateUrl: './points-scoreboard.component.html',
  styleUrl: './points-scoreboard.component.scss'
})
export class PointsScoreboardComponent {

  gameRankings?: Observable<teamPoints[]>;
  columnHeader: string[] = [];
  dataReady: Observable<boolean> | undefined;
  
  constructor(private scoreboardService: ScoreboardService) {
    timer(0, 30000).subscribe(() => (
      this.scoreboardService.getTeamPoints().subscribe(teamResults => {
        this.gameRankings = of(teamResults);
        this.dataReady = of(true);
      })
    ))
    
  }

  ngOnInit(): void {

    this.columnHeader = ["Teams", "# of Firsts", "# of Seconds", "# of Thirds", "# of Fourths"]
  }
}
