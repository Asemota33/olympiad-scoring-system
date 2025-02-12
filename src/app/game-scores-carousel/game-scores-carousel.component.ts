import { Component, OnInit } from '@angular/core';
import { scoreRankingCard } from '../interfaces/all-interfaces.interface';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-game-scores-carousel',
  templateUrl: './game-scores-carousel.component.html',
  styleUrl: './game-scores-carousel.component.scss',
})
export class GameScoresCarouselComponent implements OnInit {
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
  products = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
  responsiveOptions: any[] | undefined;


  constructor(
        private breakpointObserver: BreakpointObserver
      ) {
    this.breakpointObserver
    .observe(['(max-width: 768px)'])
    .subscribe((result) => {
      this.isSmallScreen = result.matches;
    });
    // this.isSmallScreen = false;

    this.responsiveOptions = [
      {
          breakpoint: '2560px',
          numVisible: 6,
          numScroll: 6
      },  
      {
          breakpoint: '2120px',
          numVisible: 5,
          numScroll: 5
      },
      {
          breakpoint: '1780px',
          numVisible: 4,
          numScroll: 4
      },
      {
          breakpoint: '1400px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '1100px',
          numVisible: 2,
          numScroll: 2
      }
  ];
  }

  ngOnInit(): void {

  }

  onButtonClick(index: number) {
    this.selectedBtnIndex = index;
  }
}
