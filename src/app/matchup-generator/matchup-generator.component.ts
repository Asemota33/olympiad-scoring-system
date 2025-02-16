import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-matchup-generator',
  templateUrl: './matchup-generator.component.html',
  styleUrl: './matchup-generator.component.scss'
})
export class MatchupGeneratorComponent implements OnInit, OnDestroy {

  availableTeams: any[] | undefined;
  selectedTeams: any[] | undefined;
  draggedTeam: any | undefined | null;
  isBtnDisabled = true;

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.selectedTeams = [];
    this.availableTeams = [
      {id:'1', name: 'Purple'},
      {id:'2', name: 'Red'},
      {id:'3', name: 'Orange'},
      {id:'4', name: 'Yellow'},
      {id:'5', name: 'Green'},
      {id:'6', name: 'Grey'},
      {id:'7', name: 'Pink'},
      {id:'8', name: 'Blue'},
    ]
  }

  dragStart(product: any) {
    this.draggedTeam = product;
}

  drop() {
    if(!!this.selectedTeams && this.selectedTeams?.length < 2) {
      if (this.draggedTeam ) {
        let draggedTeamIndex = this.findIndex(this.draggedTeam);
        this.selectedTeams = [...(this.selectedTeams as any[]), this.draggedTeam];
        this.availableTeams = this.availableTeams?.filter((val, i) => i != draggedTeamIndex);
        this.draggedTeam = null;
        this.toggleBtn();
      }

    }
    else {
      this.triggerSnackBar();
    }

  }

  dragEnd() {
    this.draggedTeam = null;
  }

  findIndex(team: any) {
    let index = -1;
    for (let i = 0; i < (this.availableTeams as any[]).length; i++) {
        if (team.id === (this.availableTeams as any[])[i].id) {
            index = i;
            break;
        }
    }
    return index;
  }

  removeProduct(team: any) {
    this.availableTeams = [...(this.availableTeams as any[]), team];
    const dropZoneTeamsLeft = this.selectedTeams?.filter((val) => val.id != team.id);
    this.selectedTeams = dropZoneTeamsLeft;
    this.toggleBtn();
  }

  triggerSnackBar() {
    this._snackBar.open
    this._snackBar.open("You can only select 2 teams", "Close", {
      duration: 5000,
      verticalPosition: 'top',
    });

  }

  toggleBtn(){
    this.isBtnDisabled = this.selectedTeams?.length == 2 ? false : true;
  }

  ngOnDestroy() {
  }
}
