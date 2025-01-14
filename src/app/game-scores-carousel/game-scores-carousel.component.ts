import { Component, OnInit } from '@angular/core';
import { scoreRankingCard } from '../interfaces/all-interfaces.interface';

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
  products: any[];
  responsiveOptions: any;
  ELEMENT_DATA: scoreRankingCard[];
  game: string = '';

  constructor() {
    this.products = [
      {
        id: '1000',
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5,
      },
      {
        id: '1000',
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5,
      },
      {
        id: '1000',
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5,
      },
    ];
    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '1220px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '768px',
        numVisible: 1,
        numScroll: 1,
      },
    ];

    this.ELEMENT_DATA = [
      { position: 1, name: 'Red', points: 54 },
      { position: 2, name: 'Green', points: 48 },
      { position: 3, name: 'Blue', points: 40 },
      // {position: 4, name: 'Yellow', points: 26, },
    ];

    this.game = this.gameNames[0];


  }

  ngOnInit(): void {

  }

  onButtonClick(game: string) {
    this.game = game;

    switch(game) {
      case 'Basketball':
        this.ELEMENT_DATA = [
          { position: 1, name: 'Purple', points: 66 },
          { position: 2, name: 'Blue', points: 62 },
          { position: 3, name: 'Red', points: 43 },
        ];
        break;
      case 'Tennis':
        this.ELEMENT_DATA = [
          { position: 1, name: 'Pink', points: 24 },
          { position: 2, name: 'Orange', points: 3 },
          { position: 3, name: 'Yellow', points: 2 },
        ];
        break;
      case 'Cricket':
        this.ELEMENT_DATA = [
          { position: 1, name: 'Blue', points: 86 },
          { position: 2, name: 'Yellow', points: 73 },
          { position: 3, name: 'Orange', points: 51 },
        ];
        break;
    }




    if (game === 'Soccer') {
      this.ELEMENT_DATA = [
        { position: 1, name: 'Blue', points: 45 },
        { position: 2, name: 'Yellow', points: 62 },
        { position: 3, name: 'Orange', points: 40 },
      ];
    }
  }
}
