import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditScoreProgressionComponent } from '../edit-score-progression/edit-score-progression.component';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-score-progression',
  templateUrl: './score-progression.component.html',
  styleUrl: './score-progression.component.scss'
})
export class ScoreProgressionComponent implements OnInit {

  prevMatchValues: any = {};

  selected = 'option2';
  tournamentRounds: any[] = [
    {
      type: 'quarterfinals',
      title: 'Quarterfinals',
      matches: [
        {
          teams: [
            { name: 'Blue', code: 'blue', score: 4, isWinner: true },
            { name: 'Orange', code: 'orange', score: 1 }
          ]
        },
        {
          teams: [
            { name: 'Purple', code: 'purple', score: 7, isWinner: true },
            { name: 'Pink', code: 'pink', score: 1 }
          ]
        },
        {
          teams: [
            { name: 'Gray', code: 'gray', score: 3, isWinner: true },
            { name: 'Red', code: 'red', score: 0 }
          ]
        },
        {
          teams: [
            { name: 'Green', code: 'green', score: 2, isWinner: true },
            { name: 'Yellow', code: 'yellow', score: 1 }
          ]
        }
      ]
    },
    {
      type: 'semifinals',
      title: 'Semifinals',
      matches: [
        {
          teams: [
            { name: 'Purple', code: 'unassigned', score: 0 },
            { name: 'Blue', code: 'unassigned', score: 0, isWinner: true }
          ]
        },
        {
          teams: [
            { name: 'Gray', code: 'unassigned', score: 0 },
            { name: 'Green', code: 'unassigned', score: 0, isWinner: true }
          ]
        }
      ]
    },
    {
      type: 'Bronze',
      title: 'Bronze',
      matches: [
        {
          teams: [
            { name: 'Purple', code: 'unassigned', score: 0 },
            { name: 'Gray', code: 'unassigned', score: 0, isWinner: true, medal: 'bronze' }
          ]
        }
      ]
    },
    {
      type: 'finals',
      title: 'Finals',
      matches: [
        {
          teams: [
            { name: 'Blue', code: 'unassigned', score: 0, medal: 'silver' },
            { name: 'Green', code: 'unassigned', score: 0, isWinner: true, medal: 'gold' }
          ]
        }
      ]
    }
  ];

  scoreForm!: FormGroup;

  constructor(private dialog: MatDialog) {
    this.scoreForm = new FormGroup({});
  }

  ngOnInit() {
    this.setupScoreControls();
  }

  setupScoreControls(): void {
    // Dynamically create FormControls for each team's score
    this.tournamentRounds.forEach(round => {
      round.matches.forEach((match: any, matchIndex: number) => {
        match.teams.forEach((team: any, teamIndex: number) => {
          const controlName = `round${round.title}_${matchIndex + 1}_team${teamIndex + 1}_score`;
          const control = new FormControl(team.score);
          this.scoreForm.addControl(controlName, control);


          // Store initial value to prevMatchValues
          this.prevMatchValues[controlName] = team.score;
        });
      });
    });
  }

  getControlName(roundTitle: string, match: any, team: any): FormControl {
    const roundIndex = this.tournamentRounds.findIndex(r => r.title === roundTitle);
    const matchIndex = this.tournamentRounds[roundIndex].matches.indexOf(match);
    const teamIndex = match.teams.indexOf(team);

    return this.scoreForm.get(`round${roundTitle}_${matchIndex + 1}_team${teamIndex + 1}_score`) as FormControl;
  }


  editScore(selectedGame: string) {
    this.dialog.open(EditScoreProgressionComponent, { disableClose: true })
  }

  hasTeamScoreChanged(roundTitle: string, match: any) {
    const roundIndex = this.tournamentRounds.findIndex(r => r.title === roundTitle);
    const matchIndex = this.tournamentRounds[roundIndex].matches.indexOf(match);

    const controlName1 = `round${roundTitle}_${matchIndex + 1}_team${1}_score`;
    const controlName2 = `round${roundTitle}_${matchIndex + 1}_team${2}_score`;

    const prevValue1 = this.prevMatchValues[`round${roundTitle}_${matchIndex + 1}_team${1}_score`];
    const prevValue2 = this.prevMatchValues[`round${roundTitle}_${matchIndex + 1}_team${2}_score`];

    return this.scoreForm.get(controlName1)?.value !== prevValue1 || this.scoreForm.get(controlName2)?.value !== prevValue2
  }

  onCancel(roundTitle: string, match: any) {
    match.teams.forEach((team: any, teamIndex: number) => {
      const controlName = `round${roundTitle}_${this.getMatchIndex(roundTitle, match) + 1}_team${teamIndex + 1}_score`;
      this.getControlName(roundTitle, match, team).setValue(this.prevMatchValues[controlName]);
    });
  }

  getMatchIndex(roundTitle: string, match: any): number {
    const round = this.tournamentRounds.find(r => r.title === roundTitle);
    return round ? round.matches.indexOf(match) : -1;
  }

}
