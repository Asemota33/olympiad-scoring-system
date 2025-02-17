import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnChanges, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'olympiad-scoring-system';
  navDetails: Array<any>;
  clickedContent = '';
  isSmallScreen = false;
  matToolbarEnabled = true;

  @ViewChild('drawer') drawer!: MatDrawer;

  constructor(
    private router: Router,
    private breakpointObserver: BreakpointObserver
  ) {
    this.navDetails = [
      { name: "Overview", path: "/scoreboard"},
      { name: "Score & Rankings", path: "/points"},
      { name: "Matchup Generation", path: "/matchups"},
      { name: "Score Progression", path: "/score-progression"},
    ];
  }

  ngOnInit(): void {
    const currentRoute = document.location.pathname;
    const activeLink = this.navDetails.find(
      (link) => link.path === currentRoute
    );
    this.toggleMatToolbar(activeLink?.name);
    
    if (activeLink) {
      this.clickedContent = activeLink.name;
    } else {
      this.clickedContent = 'Overview';
    }

    this.breakpointObserver
      .observe(['(max-width: 768px)'])
      .subscribe((result) => {
        this.isSmallScreen = result.matches;
      });
  }

  updateTitle(event: any) {
    this.toggleNav();
    const target = event.target as HTMLElement;
    this.toggleMatToolbar(target.innerText);
    this.clickedContent = target.innerText;
  }

  toggleMatToolbar(pageName: string) {
    if (pageName === 'Matchup Generation') {
      this.matToolbarEnabled = false;
    } else {
      this.matToolbarEnabled = true;
    }
  }

  /**
   * 
   * Function to toggle hamburger menu and hide toggle icons depending on state of menu
   * 
   * @returns void
   */ 
  toggleNav() {
    if(this.isSmallScreen) {
      this.drawer.toggle();
      const hamMenuBtn = document.getElementById('hamburgerMenuBtn');
      if (hamMenuBtn) {
        this.drawer.openedStart.subscribe(() => {
          hamMenuBtn.style.display = 'none';
        });
        this.drawer.closedStart.subscribe(() => {
          hamMenuBtn.style.display = '';
        });
      }
    }
    
  }

}
