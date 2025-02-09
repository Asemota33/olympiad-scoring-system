import { Component, OnInit } from '@angular/core';
import { scoreRankingCard } from '../interfaces/all-interfaces.interface';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-game-scores-carousel',
  templateUrl: './game-scores-carousel.component.html',
  styleUrl: './game-scores-carousel.component.scss',
})
export class GameScoresCarouselComponent {
  gameNames = [
    'Soccer',
    'Basketball',
    'Tennis',
    'Cricket',
    'Baseball',
    'Golf',
    'Hockey',
    'Volleyball',
    'Rugby',
    'Table Tennis',
  ];
  selectedBtnIndex: number = 0;
  isSmallScreen = false;


  constructor(
        private breakpointObserver: BreakpointObserver
      ) {
    this.breakpointObserver
    .observe(['(max-width: 768px)'])
    .subscribe((result) => {
      this.isSmallScreen = result.matches;
    });
  }

  onButtonClick(index: number) {
    this.selectedBtnIndex = index;
  }
}
