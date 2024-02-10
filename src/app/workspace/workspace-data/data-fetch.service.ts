import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataFetchService {

  private leaguesUrl = 'assets/leagues.json'; // Adjust the path based on your project structure

  private countriesUrl = 'assets/teams-countries.json';

  constructor(private http: HttpClient) { }

  getLeagues(): Observable<any> {
    return this.http.get(this.leaguesUrl);
  }
  getcountries(): Observable<any> {
    return this.http.get(this.countriesUrl);
  }
}
