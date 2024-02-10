import { Component } from '@angular/core';
import { DataFetchService } from '../data-fetch.service';

interface ValueParameters {
  primaryvalue: string[];
  secondaryvalue: string[];
  image: string[];
}

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.scss']
})
export class CompetitionsComponent {

  constructor(private dataFetchService: DataFetchService) {}

  leagueData = [];

  ValueParam?: ValueParameters;

  EnableCard: boolean = true;

  ngOnInit() {
    this.dataFetchService.getLeagues().subscribe((data: any) => {
      this.leagueData = data.leagues;
    });

    this.ValueParam = {
      primaryvalue: ['league','name'],
      secondaryvalue: ['country','name'],
      image: ['league','logo']
    }
  }

  onPlayerSelected(data: any) {
    console.log(data);
  }
}
