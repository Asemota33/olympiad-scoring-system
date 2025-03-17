import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {
  TeamResults,
} from '../interfaces/all-interfaces.interface';
import { ScoreboardService } from '../services/scoreboard.service';


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
  // columns: any[];
  dataSource?: any[];
  contentReady = false;

  constructor(private scoreboardService: ScoreboardService) {
    // setTimeout(() => {
    //   this.scoreboardService.getTeamPoints().subscribe(teamResults => {
    //     this.gameRankings = teamResults;
    //     this.dataSource = this.transformedTeams(this.gameRankings)
    //     this.contentReady = true;
    //   })
    // }, 1000);

    

    // this.columns = [
    //   {
    //     columnDef: 'position',
    //     header: '#',
    //     cell: (element: any) => `${element.position}`,
    //   },
    //   {
    //     columnDef: 'name',
    //     header: 'Team',
    //     cell: (element: any) => `${element.name}`,
    //   },
    //   {
    //     columnDef: 'numOfFirsts',
    //     header: 'Firsts',
    //     cell: (element: any) => `${element.firsts}`,
    //   },
    //   {
    //     columnDef: 'numOfSeconds',
    //     header: 'Seconds',
    //     cell: (element: any) => `${element.seconds}`,
    //   },
    //   {
    //     columnDef: 'numOfThirds',
    //     header: 'Thirds',
    //     cell: (element: any) => `${element.thirds}`,
    //   },
    //   {
    //     columnDef: 'numOfFourths',
    //     header: 'Fourths',
    //     cell: (element: any) => `${element.fourths}`,
    //   },
    //   {
    //     columnDef: 'totalPoints',
    //     header: 'Points',
    //     cell: (element: any) => `${element.total}`,
    //   },
    // ];
    // this.displayedColumns = this.columns.map((c) => c.columnDef);
  }

  ngOnInit(): void {
    // this.columnHeader = [
    //   'Teams',
    //   '# of Firsts',
    //   '# of Seconds',
    //   '# of Thirds',
    //   '# of Fourths',
    //   'Total Points',
    // ];
  }

  // transformedTeams(gameRankings: TeamResults[]) {
  //   const transformedTeams = gameRankings
  //   .sort((a, b) => b.totalPoints - a.totalPoints)
  //   .map((team, index) => ({
  //     position: index + 1,
  //     name: team.team,
  //     firsts: team.firstPlaces, 
  //     seconds: team.secondPlaces,
  //     thirds: team.thirdPlaces,
  //     fourths: team.fourthPlaces,
  //     total: team.totalPoints,
  //   }));
  //   return transformedTeams;
  // }
}
