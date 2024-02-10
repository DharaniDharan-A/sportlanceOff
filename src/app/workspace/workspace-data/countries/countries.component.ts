import { Component } from '@angular/core';
import { DataFetchService } from '../data-fetch.service';

interface ValueParameters {
  primaryvalue: string[];
  secondaryvalue: string[];
  image: string[];
}

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent {

  constructor(private dataFetchService: DataFetchService) {}

  countryData = [];

  EnableCard: boolean = true;

  ValueParam?: ValueParameters;

  ngOnInit() {
    this.dataFetchService.getcountries().subscribe((data: any) => {
      this.countryData = data.countries;
    });
    this.ValueParam = {
      primaryvalue: ['name'],
      secondaryvalue: ['code'],
      image: ['flag']
    }
  }

  onPlayerSelected(data: any) {
    
  }
}
