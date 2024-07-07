import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchupResultsComponent } from './matchup-results.component';

describe('MatchupResultsComponent', () => {
  let component: MatchupResultsComponent;
  let fixture: ComponentFixture<MatchupResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatchupResultsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatchupResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
