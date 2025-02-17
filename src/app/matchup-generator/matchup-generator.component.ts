import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-matchup-generator',
  templateUrl: './matchup-generator.component.html',
  styleUrl: './matchup-generator.component.scss'
})
export class MatchupGeneratorComponent implements OnInit, OnDestroy {

  orignalTeams: any[] | undefined;
  availableTeams: any[] | undefined;
  selectedTeams: any[] | undefined;
  draggedTeam: any | undefined | null;
  isBtnDisabled = true;
  matchups: any[] = [];

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit() {

    this.selectedTeams = [];
    this.orignalTeams = [
      {id:'1', name: 'Purple'},
      {id:'2', name: 'Red'},
      {id:'3', name: 'Orange'},
      {id:'4', name: 'Yellow'},
      {id:'5', name: 'Green'},
      {id:'6', name: 'Grey'},
      {id:'7', name: 'Pink'},
      {id:'8', name: 'Blue'},
    ]

    //Clone the original teams array
    this.availableTeams = JSON.parse(JSON.stringify(this.orignalTeams));
  }

  dragStart(product: any) {
    this.draggedTeam = product;
}

  drop() {
    if(this.selectedTeams && this.selectedTeams?.length < 2) {
      if (this.draggedTeam ) {
        //Add current team that is being dragged to the drop zone 
        //to selectedTeams array and remove it from availableTeams array
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

  /**
   * Finds the index of the team object in the availableTeams array.
   * @param team - The team object to find in the availableTeams array.
   */
  findIndex(team: any) {
    let index = -1;
    if(this.availableTeams) {
      for (let i = 0; i < this.availableTeams.length; i++) {
          if (team.id === this.availableTeams[i].id) {
              index = i;
              break;
          }
      }
    }
    return index;
  }

  /**
   * Remove team from the drop zone
   * 
   * @param team team object to remove from drop zone
   * @param addBackToListOfTeams boolean flag to add back teams to list 
   * after removing them from drop zone
   */
  removeTeam(team: any, addBackToListOfTeams = true) {
    if(addBackToListOfTeams){
      this.availableTeams = [...(this.availableTeams as any[]), team];
    }
    //Remove team from drop zone
    const dropZoneTeamsLeft = this.selectedTeams?.filter((val) => val.id != team.id);
    this.selectedTeams = dropZoneTeamsLeft;
    this.toggleBtn();
  }

  triggerSnackBar() {
    this._snackBar.open("You can only select 2 teams", "Close", {
      duration: 5000,
      verticalPosition: 'bottom',
    });
  }

  /**
   * Check if 2 teams are selected if so enable the button
   * to save the matchup
   * 
   * */
  private toggleBtn(){
    this.isBtnDisabled = this.selectedTeams?.length == 2 ? false : true;
  }
  
  saveMatchup() {
    if(this.selectedTeams) {
      this.matchups.push(
        {
          team1: this.selectedTeams[0].name,
          team2: this.selectedTeams[1].name,
        }
      );

      //Remove teams from drop zone box
      for(let i = 0; i < 2; i++) {
        this.removeTeam(this.selectedTeams[0], false);
      }
    }

  }


  /**
  * Remove matchup from list of matchups
  * @param matchup matchup object to remove from list
  **/
  deleteMatchup(matchup: any) {
  console.log('Delete button clicked!');
    this.matchups = this.matchups.filter((val) => !(val.team1 === matchup.team1 && val.team2 === matchup.team2));
    //Get team objects from team names
    const team1 = this.orignalTeams?.find((val) => val.name == matchup.team1);
    const team2 = this.orignalTeams?.find((val) => val.name == matchup.team2);
    //Check if team is already in available teams list
    const flag = this.availableTeams?.some((team) => team.name == team1.name || team.name == team2.name);
    if(!flag) {
      this.availableTeams = [...(this.availableTeams as any[]), team1, team2];
    }
  }

  ngOnDestroy() {
  }
}
