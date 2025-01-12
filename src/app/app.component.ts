import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'olympiad-scoring-system';
  navDetails: Array<any>
  clickedContent = ""
  isSmallScreen = false;

  constructor(private router: Router, private breakpointObserver: BreakpointObserver) {
    this.navDetails = [
      { name: "Overview", path: "/scoreboard"},
      { name: "Rankings", path: "/points"},
      { name: "Matchup Generation", path: "/matchups"},
      { name: "Score Progression", path: "/score-progression"},
    ];
  }

  ngOnInit(): void {
    const currentRoute = document.location.pathname
    const activeLink = this.navDetails.find(link => link.path === currentRoute);

    if (activeLink) {
      this.clickedContent = activeLink.name;
    } else {
      this.clickedContent = 'Overview'; 
    }

    
    this.breakpointObserver.observe(['(max-width: 768px)']).subscribe(result => {
      console.log("result: ", result)
      this.isSmallScreen = result.matches;
    });
  }

  updateTitle(event: any) {
    const target = event.target as HTMLElement
    this.clickedContent = target.innerText
  }
}
