import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { scoreRankingCard } from '../interfaces/all-interfaces.interface';




@Component({
  selector: 'app-score-ranking-card',
  templateUrl: './score-ranking-card.component.html',
  styleUrl: './score-ranking-card.component.scss',
})
export class ScoreRankingCardComponent {

  @Input() dataSource: scoreRankingCard[] = [];
  @Input() game: string  = ""

  columns: any[]
  displayedColumns: any;


  constructor() { 


    this.columns = [
      {
        columnDef: 'position',
        header: 'No.',
        cell: (element: any) => `${element.position}`,
      },
      {
        columnDef: 'name',
        header: 'Name',
        cell: (element: any) => `${element.name}`,
      },
      {
        columnDef: 'points',
        header: 'Points',
        cell: (element: any) => `${element.points}`,
      },

    ];
    this.displayedColumns = this.columns.map(c => c.columnDef);
  }

}
