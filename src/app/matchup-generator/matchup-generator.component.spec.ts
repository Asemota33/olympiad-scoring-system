import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchupGeneratorComponent } from './matchup-generator.component';

describe('MatchupGeneratorComponent', () => {
  let component: MatchupGeneratorComponent;
  let fixture: ComponentFixture<MatchupGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatchupGeneratorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatchupGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
