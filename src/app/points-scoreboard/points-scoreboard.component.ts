import { Component } from '@angular/core';
import { Observable, timer, of } from 'rxjs';
import {
  teamPoints,
  transformedGameResults,
} from '../interfaces/all-interfaces.interface';
import { ScoreboardService } from '../services/scoreboard.service';

export interface TeamResults {
   team: string, firstPlaces: number, secondPlaces: number, thirdPlaces: number, fourthPlaces: number, totalPoints: number
}

@Component({
  selector: 'app-points-scoreboard',
  templateUrl: './points-scoreboard.component.html',
  styleUrl: './points-scoreboard.component.scss',
})
export class PointsScoreboardComponent {
  gameRankings?: any[];
  columnHeader: string[] = [];
  dataReady: Observable<boolean> | undefined;
  displayedColumns: any;
  columns: any[];
  dataSource?: any[];

  constructor(private scoreboardService: ScoreboardService) {
      this.scoreboardService.getTeamPoints().subscribe(teamResults => {
        this.gameRankings = teamResults;
        console.log(this.gameRankings)
        this.dataSource = this.transformedTeams(this.gameRankings)
        console.log(this.dataSource)

      })

    

    this.columns = [
      {
        columnDef: 'position',
        header: '#',
        cell: (element: any) => `${element.position}`,
      },
      {
        columnDef: 'name',
        header: 'Team',
        cell: (element: any) => `${element.name}`,
      },
      {
        columnDef: 'numOfFirsts',
        header: '# of Firsts',
        cell: (element: any) => `${element.firsts}`,
      },
      {
        columnDef: 'numOfSeconds',
        header: '# of Seconds',
        cell: (element: any) => `${element.seconds}`,
      },
      {
        columnDef: 'numOfThirds',
        header: '# of Thirds',
        cell: (element: any) => `${element.thirds}`,
      },
      {
        columnDef: 'numOfFourths',
        header: '# of Fourths',
        cell: (element: any) => `${element.fourths}`,
      },
      {
        columnDef: 'totalPoints',
        header: 'Total Points',
        cell: (element: any) => `${element.total}`,
      },
    ];
    this.displayedColumns = this.columns.map((c) => c.columnDef);
  }

  ngOnInit(): void {
    this.columnHeader = [
      'Teams',
      '# of Firsts',
      '# of Seconds',
      '# of Thirds',
      '# of Fourths',
      'Total Points',
    ];
  }

  transformedTeams(gameRankings: TeamResults[]) {
    const transformedTeams = gameRankings
    .sort((a, b) => b.totalPoints - a.totalPoints)
    .map((team, index) => ({
      position: index + 1,
      name: team.team,
      firsts: team.firstPlaces, 
      seconds: team.secondPlaces,
      thirds: team.thirdPlaces,
      fourths: team.fourthPlaces,
      total: team.totalPoints,
    }));
    return transformedTeams;
  }
}
