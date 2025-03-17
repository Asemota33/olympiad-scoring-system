import { Component, OnInit } from '@angular/core';
import { ScoreboardService } from '../services/scoreboard.service';
import { from, map, Observable, of, timer } from 'rxjs';
import { TeamResults, transformedGameResults } from '../interfaces/all-interfaces.interface';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrl: './scoreboard.component.scss'
})
export class ScoreboardComponent implements OnInit{
  
  // gameRankings?: Observable<transformedGameResults[]>;
  columnHeader: string[] = [];
  dataReady: Observable<boolean> | undefined;
  gameRankings?: any[];
  dataSource?: any[];
  contentReady = false;
  displayedColumns: any;
  columns: any[] = [];
  
  constructor(private scoreboardService: ScoreboardService) {
    // timer(0, 30000).subscribe(() => (
    //   this.scoreboardService.getGameResults().subscribe(gameResults => {
    //     this.gameRankings = of(gameResults);
    //     this.dataReady = of(true);
    //   })
    // ))

    setTimeout(() => {
      this.scoreboardService.getTeamPoints().subscribe(teamResults => {
        this.gameRankings = teamResults;
        this.dataSource = this.transformedTeams(this.gameRankings)
        this.contentReady = true;
      })
    }, 1000);

    this.setColumns();
    
  }

  ngOnInit(): void {
    this.setColumnHeader();

    this.columnHeader = ["Game", "First Place", "Second Place", "Third Place", "Fourth Place"]
  }
  
  private setColumns() {

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
        header: 'Firsts',
        cell: (element: any) => `${element.firsts}`,
      },
      {
        columnDef: 'numOfSeconds',
        header: 'Seconds',
        cell: (element: any) => `${element.seconds}`,
      },
      {
        columnDef: 'numOfThirds',
        header: 'Thirds',
        cell: (element: any) => `${element.thirds}`,
      },
      {
        columnDef: 'numOfFourths',
        header: 'Fourths',
        cell: (element: any) => `${element.fourths}`,
      },
      {
        columnDef: 'totalPoints',
        header: 'Points',
        cell: (element: any) => `${element.total}`,
      },
    ];
    this.displayedColumns = this.columns.map((c) => c.columnDef);
  }

  private setColumnHeader() {
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
