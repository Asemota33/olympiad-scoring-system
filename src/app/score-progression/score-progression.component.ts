import { Component } from '@angular/core';
import { Observable, timer, of } from 'rxjs';
import { teamPoints, transformedGameResults } from '../interfaces/all-interfaces.interface';
import { ScoreboardService } from '../services/scoreboard.service';

@Component({
  selector: 'app-score-progression',
  templateUrl: './score-progression.component.html',
  styleUrl: './score-progression.component.scss'
})
export class ScoreProgressionComponent {

  tournamentRounds: any[] = [
    {
      type: 'quarterfinals',
      title: 'Quarterfinals',
      matches: [
        {
          date: '1998-02-18',
          dateDisplay: '18 February 1998',
          teams: [
            { name: 'Canada', code: 'CAN', flag: 'ca', score: 4, isWinner: true },
            { name: 'Kazakhstan', code: 'KAZ', flag: 'kz', score: 1 }
          ]
        },
        {
          date: '1998-02-18',
          dateDisplay: '18 February 1998',
          teams: [
            { name: 'Russia', code: 'RUS', flag: 'ru', score: 7, isWinner: true },
            { name: 'Czech Republic', code: 'CZE', flag: 'cz', score: 1 }
          ]
        },
        {
          date: '1998-02-18',
          dateDisplay: '18 February 1998',
          teams: [
            { name: 'Finland', code: 'FIN', flag: 'fi', score: 3, isWinner: true },
            { name: 'Germany', code: 'GER', flag: 'de', score: 0 }
          ]
        },
        {
          date: '1998-02-18',
          dateDisplay: '18 February 1998',
          teams: [
            { name: 'Sweden', code: 'SWE', flag: 'se', score: 2, isWinner: true },
            { name: 'USA', code: 'USA', flag: 'us', score: 1 }
          ]
        }
      ]
    },
    {
      type: 'semifinals',
      title: 'Semifinals',
      matches: [
        {
          date: '1998-02-20',
          dateDisplay: '20 February 1998',
          teams: [
            { name: 'Canada', code: 'CAN', flag: 'ca', score: 1 },
            { name: 'Russia', code: 'RUS', flag: 'ru', score: 2, isWinner: true }
          ]
        },
        {
          date: '1998-02-20',
          dateDisplay: '20 February 1998',
          teams: [
            { name: 'Finland', code: 'FIN', flag: 'fi', score: 1 },
            { name: 'Sweden', code: 'SWE', flag: 'se', score: 2, isWinner: true }
          ]
        }
      ]
    },
    {
      type: 'Bronze',
      title: 'Bronze',
      matches: [
        {
          date: '1998-02-22',
          dateDisplay: '22 February 1998',
          teams: [
            { name: 'Canada', code: 'CAN', flag: 'ca', score: 1 },
            { name: 'Finland', code: 'FIN', flag: 'fin', score: 3, isWinner: true, medal: 'bronze' }
          ]
        }
      ]
    },
    {
      type: 'finals',
      title: 'Finals',
      matches: [
        {
          date: '1998-02-22',
          dateDisplay: '22 February 1998',
          teams: [
            { name: 'Russia', code: 'RUS', flag: 'ru', score: 1 , medal: 'silver'},
            { name: 'Sweden', code: 'SWE', flag: 'se', score: 3, isWinner: true, medal: 'gold' }
          ]
        }
      ]
    }
  ];
  
  
 
}
