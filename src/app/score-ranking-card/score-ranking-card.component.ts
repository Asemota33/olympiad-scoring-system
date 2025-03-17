import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';


export interface IGameResults { 
  game: string,
  teams: string[]
}

@Component({
  selector: 'app-score-ranking-card',
  templateUrl: './score-ranking-card.component.html',
  styleUrl: './score-ranking-card.component.scss',
})
export class ScoreRankingCardComponent implements OnInit {

  @Input() dataSource: any;
  @Input() game: any;

  columns: any[] = [];
  displayedColumns: any;
  cardReady = false;


  constructor(private router: Router) { 
    this.setColumns()
    setTimeout(() => { // Waiting for data to be loaded
      console.log("dataSource", this.dataSource)
      if (this.dataSource && this.dataSource[0]?.game) {
        this.game = this.dataSource[0].game
        this.cardReady = true; // Data is loaded and card can be displayed
      }
    }, 1000)
  }

  ngOnInit() {

  }

  goToGameScores(gameVal: string) {
    this.router.navigate(['/points'], {
      queryParams: { game: gameVal },
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });

  }

  private setColumns() {
    this.columns = [
      {
        columnDef: 'game',
        header: 'Position',
        cell: (element: any) => `${element.game}`,
      },
      {
        columnDef: 'team',
        header: 'Team',
        cell: (element: any) => `${element.team}`,
      },

    ];
    this.displayedColumns = this.columns.map(c => c.columnDef); 
  }

}
