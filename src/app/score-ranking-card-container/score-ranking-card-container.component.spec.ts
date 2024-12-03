import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreRankingCardContainerComponent } from './score-ranking-card-container.component';

describe('ScoreRankingCardContainerComponent', () => {
  let component: ScoreRankingCardContainerComponent;
  let fixture: ComponentFixture<ScoreRankingCardContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScoreRankingCardContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScoreRankingCardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
