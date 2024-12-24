import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointsScoreboardComponent } from './points-scoreboard.component';

describe('PointsScoreboardComponent', () => {
  let component: PointsScoreboardComponent;
  let fixture: ComponentFixture<PointsScoreboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PointsScoreboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PointsScoreboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
