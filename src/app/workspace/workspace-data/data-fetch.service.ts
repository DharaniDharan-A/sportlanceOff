import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*', // Adjust this based on your server configuration
    // Add other headers if necessary
  }),
};

@Injectable({
  providedIn: 'root'
})
export class DataFetchService {

  private leaguesUrl = 'assets/leagues.json'; // Adjust the path based on your project structure

  private countriesUrl = 'assets/teams-countries.json';

  private goalsUrl = 'assets/goals.json';

  private playersUrl = 'assets/players.json';

  constructor(private http: HttpClient) { }

  getLeagues(): Observable<any> {
    return this.http.get(this.leaguesUrl);
  }
  getcountries(): Observable<any> {
    return this.http.get(this.countriesUrl);
  }

  getGoals(): Observable<any> {
    return this.http.get(this.goalsUrl);
  }

  getPlayers(): Observable<any> {
    return this.http.get(this.playersUrl);
  }
}
