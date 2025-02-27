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



  constructor() {
  }

  ngOnInit(): void {

  }

  
}
