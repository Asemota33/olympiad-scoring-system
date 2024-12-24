import { Component, OnInit } from '@angular/core';
import { ScoreboardService } from '../services/scoreboard.service';
import { from, map, Observable, of, timer } from 'rxjs';
import { transformedGameResults } from '../interfaces/all-interfaces.interface';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrl: './scoreboard.component.scss'
})
export class ScoreboardComponent implements OnInit{
  
  gameRankings?: Observable<transformedGameResults[]>;
  columnHeader: string[] = [];
  dataReady: Observable<boolean> | undefined;
  
  constructor(private scoreboardService: ScoreboardService) {
    // timer(0, 30000).subscribe(() => (
    //   this.scoreboardService.getGameResults().subscribe(gameResults => {
    //     this.gameRankings = of(gameResults);
    //     this.dataReady = of(true);
    //   })
    // ))
    
  }

  ngOnInit(): void {

    this.columnHeader = ["Game", "First Place", "Second Place", "Third Place", "Fourth Place"]
  }
  
}
