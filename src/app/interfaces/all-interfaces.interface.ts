export interface results {
    first: string;
    second: string;
    third: string;
    fourth: string;
  }
  
 export interface gameResults {
    gameName: results; 
    [key: string] : any;
  }
  
 export interface transformedGameResults {
    game: string;
    first: string;
    second: string;
    third: string;
    fourth: string;
  }

  export interface teamPoints {
    team: string,
    firstPlaces: number,
    secondPlaces: number,
    thirdPlaces: number,
    fourthPlaces: number,
    totalPoints: number
  }