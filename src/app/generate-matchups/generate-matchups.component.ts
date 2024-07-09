import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-generate-matchups',
  templateUrl: './generate-matchups.component.html',
  styleUrl: './generate-matchups.component.scss'
})
export class GenerateMatchupsComponent {

  teamsForm: FormGroup;
  constructor(
    private fb: FormBuilder
  ) {
    this.teamsForm = this.fb.group({
      gameName: '',
      teams: this.fb.array([
        this.fb.control(null)
      ])
    })
  }

  addTeam(): void {
    (this.teamsForm.get('teams') as FormArray).push(
      this.fb.control(null)
    );
  }

  getPhonesFormControls(): FormControl[] {
    return (<FormArray> this.teamsForm.get('teams')).controls as FormControl[];
  }

  getGameNameControl(){
    return this.teamsForm.get('gameName') as FormControl;
  }

}