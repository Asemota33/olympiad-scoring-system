import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrl: './scoreboard.component.scss'
})
export class ScoreboardComponent implements OnInit{
  
  users: any;
  
  ngOnInit(): void {
    this.users = [
      {
        id: "1",
        name: "michael",
        creation: "value",
        color: "value2"
      }
    ]
  }
  
}
