import { Component, Input } from '@angular/core';
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
export class ScoreRankingCardComponent {

  @Input() dataSource: any;
  @Input() game: any;

  columns: any[]
  displayedColumns: any;
  cardReady = false;


  constructor() { 
    timer(1000).subscribe(() => { // Waiting for data to be loaded
      console.log("dataSource", this.dataSource)
      if (this.dataSource && this.dataSource[0]?.game) {
        this.game = this.dataSource[0].game
        this.cardReady = true; // Data is loaded and card can be displayed
      }
    })


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
