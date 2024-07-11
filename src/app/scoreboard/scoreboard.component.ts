import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrl: './scoreboard.component.scss'
})
export class ScoreboardComponent implements OnInit{
  
  gameRankings: any;
  columnHeader: string[] = [];
  
  ngOnInit(): void {
    this.gameRankings = [
      {
        game: "soccer",
        first: "pink",
        second: "green",
        third: "yellow",
        fourth: "blue"
      },
      {
        game: "soccer",
        first: "pink",
        second: "grey",
        third: "yellow",
        fourth: "blue"
      },
      {
        game: "soccer",
        first: "orange",
        second: "green",
        third: "yellow",
        fourth: "blue"
      },
      {
        game: "soccer",
        first: "pink",
        second: "green",
        third: "red",
        fourth: "blue"
      },
      {
        game: "soccer",
        first: "pink",
        second: "green",
        third: "yellow",
        fourth: "purple"
      },
    ]

    this.columnHeader = ["Game", "First Place", "Second Place", "Third Place", "Fourth Place"]
  }
  
}
