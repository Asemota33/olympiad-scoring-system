import { Component, OnDestroy, OnInit } from '@angular/core';
import { scoreRankingCard } from '../interfaces/all-interfaces.interface';
import { BreakpointObserver } from '@angular/cdk/layout';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-game-scores-carousel',
  templateUrl: './game-scores-carousel.component.html',
  styleUrl: './game-scores-carousel.component.scss',
})
export class GameScoresCarouselComponent implements OnInit, OnDestroy {
  gameNames = [
    'Soccer',
    'Basketball',
    'Tennis',
    '100M (Female)',
    'Baseball',
    'Golf',
    'Hockey',
    'Volleyball',
    '100M (Male)',
    'Table Tennis',
    'Fifa'
    
  ];
  selectedBtnIndex: number = 0;
  isSmallScreen = false;
  products = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
  responsiveOptions: any[] | undefined;
  destroy$ = new Subject<void>();


  constructor(
        private breakpointObserver: BreakpointObserver,
        private route: ActivatedRoute
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
    this.checkIfGameIsSelected();
  }

  private checkIfGameIsSelected() {
    this.route.queryParams.pipe(takeUntil(this.destroy$)).subscribe((params) => {
      if (params && params['game']) {
        const index = this.getIndexOfName(params['game'], this.gameNames);
        const idx = index === -1 ? 0 : index; // If game is not found, default to first game
        this.onButtonClick(idx);
      }
    });
  }

  private convertStringArrayToLowerCase(array: string[]): string[] {
    return array.map((item) => item.toLowerCase());
  }

  private getIndexOfName(game: string, gameArray: string[]): number {
    const lowercaseArray = this.convertStringArrayToLowerCase(gameArray);
    const lowercaseGame = game.toLowerCase();
    return lowercaseArray.indexOf(lowercaseGame);
  }

  onButtonClick(index: number) {
    this.selectedBtnIndex = index;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
