import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable, of } from 'rxjs';
import { teamPoints, transformedGameResults } from '../interfaces/all-interfaces.interface';
import { environment } from '../../environments/environment.development';



@Injectable({
  providedIn: 'root'
})

export class ScoreboardService {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getGameResults(): Observable<transformedGameResults[]> {
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Access-Control-Allow-Credentials": "true"
      }
    };

    return this.http.get<transformedGameResults[]>(`${this.baseUrl}/api/results/games`)

  }

  getTeamPoints(): Observable<teamPoints[]> {
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Access-Control-Allow-Credentials": "true"
      }
    };

    return this.http.get<teamPoints[]>(`${this.baseUrl}/api/results/teams`)

  }
}
