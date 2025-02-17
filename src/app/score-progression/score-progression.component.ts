import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditScoreProgressionComponent } from '../edit-score-progression/edit-score-progression.component';

@Component({
  selector: 'app-score-progression',
  templateUrl: './score-progression.component.html',
  styleUrl: './score-progression.component.scss'
})
export class ScoreProgressionComponent {

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
            { name: 'Purple', code: 'purple', score: 1 },
            { name: 'Blue', code: 'blue', score: 2, isWinner: true }
          ]
        },
        {
          teams: [
            { name: 'Gray', code: 'gray', score: 1 },
            { name: 'Green', code: 'green', score: 2, isWinner: true }
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
            { name: 'Purple', code: 'purple', score: 1 },
            { name: 'Gray', code: 'gray', score: 3, isWinner: true, medal: 'bronze' }
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
            { name: 'Blue', code: 'blue', score: 1, medal: 'silver' },
            { name: 'Green', code: 'green', score: 3, isWinner: true, medal: 'gold' }
          ]
        }
      ]
    }
  ];


  constructor(private dialog: MatDialog) {

  }
  
  editScore(selectedGame: string){
    this.dialog.open(EditScoreProgressionComponent, {disableClose: true})
  }


}
