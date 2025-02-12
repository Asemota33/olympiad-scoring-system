import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameScoresCarouselComponent } from './game-scores-carousel.component';

describe('GameScoresCarouselComponent', () => {
  let component: GameScoresCarouselComponent;
  let fixture: ComponentFixture<GameScoresCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameScoresCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameScoresCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
