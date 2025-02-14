import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditScoreProgressionComponent } from './edit-score-progression.component';

describe('EditScoreProgressionComponent', () => {
  let component: EditScoreProgressionComponent;
  let fixture: ComponentFixture<EditScoreProgressionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditScoreProgressionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditScoreProgressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
