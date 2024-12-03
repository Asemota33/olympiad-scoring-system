import { Component } from '@angular/core';
import { scoreRankingCard } from '../interfaces/all-interfaces.interface';

@Component({
  selector: 'app-score-ranking-card-container',
  templateUrl: './score-ranking-card-container.component.html',
  styleUrl: './score-ranking-card-container.component.scss'
})
export class ScoreRankingCardContainerComponent {

  ELEMENT_DATA: scoreRankingCard[]
  
  constructor() {
    this.ELEMENT_DATA = [
      {position: 1, name: 'Red', points: 54, },
      {position: 2, name: 'Green', points: 48, },
      {position: 3, name: 'Blue', points: 40, },
      // {position: 4, name: 'Yellow', points: 26, },
    ];
  }



}
