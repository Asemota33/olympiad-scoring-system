import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-matchup-card',
  templateUrl: './matchup-card.component.html',
  styleUrl: './matchup-card.component.scss'
})
export class MatchupCardComponent {

  @Input() team1: string | undefined;
  @Input() team2: string | undefined;
  @Output() delete = new EventEmitter<{}>();
  
  constructor() { }

  onDelete(team1: any, team2: any) {
    const teams = {
      team1, team2
    };
    this.delete.emit(teams);
  }
}
