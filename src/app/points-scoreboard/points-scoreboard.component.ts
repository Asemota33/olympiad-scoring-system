import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ScoreboardService } from '../services/scoreboard.service';


@Component({
  selector: 'app-points-scoreboard',
  templateUrl: './points-scoreboard.component.html',
  styleUrl: './points-scoreboard.component.scss',
})
export class PointsScoreboardComponent {
  gameRankings?: any[];
  columnHeader: string[] = [];
  dataReady: Observable<boolean> | undefined;
  displayedColumns: any;
  dataSource?: any[];
  contentReady = false;

  constructor(private scoreboardService: ScoreboardService) {
  }

  ngOnInit(): void {

  }

}
