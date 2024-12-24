import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreRankingCardComponent } from './score-ranking-card.component';

describe('ScoreRankingCardComponent', () => {
  let component: ScoreRankingCardComponent;
  let fixture: ComponentFixture<ScoreRankingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScoreRankingCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScoreRankingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
