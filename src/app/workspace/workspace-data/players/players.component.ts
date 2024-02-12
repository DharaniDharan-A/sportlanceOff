import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataFetchService } from '../data-fetch.service';

const apiKey = '304711fae6e0c89fb7a175541119cfdb';
const apiUrl = 'https://v3.football.api-sports.io/players?league=39&season=2023&page=1';

const headers = new HttpHeaders({
  'X-RapidAPI-Key': apiKey,
  'X-RapidAPI-Host': 'v3.football.api-sports.io'
});

const options = { headers: headers };

interface ValueParameters {
  primaryvalue: string[];
  secondaryvalue: string[];
  image: string[];
}

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})

export class PlayersComponent implements OnInit {

  EnableCard: boolean = true;

  selectedData: any = {};

  ValueParam?: ValueParameters;

  jsonData: any[] = [];

  playersData: any[] = [];

  goalsData: any[] = [];

  matchedGoalsdata: any[] = [];

  chartOptions: any = {

  }
  secondData = {};

  width = '600';
  height = '400';
  type = "column3d";
  dataFormat = "json";
  dataSource = this.secondData;
  chartData: { label: string, y: number }[] = [];

  constructor(
    private http: HttpClient,
    private DataFetchService: DataFetchService
  ) { }

  ngOnInit(): void {
    this.EnableCard = true;
    // this.http.get(apiUrl, options).subscribe({
    //   next: (data) => {
    //     console.log(data);
    //   },
    //   error: (error) => {
    //     console.error(error);
    //   }
    // });
    this.ValueParam = {
      primaryvalue: ['player', 'name'],
      secondaryvalue: ['player', 'nationality'],
      image: ['player', 'photo']
    }

    this.DataFetchService.getPlayers().subscribe((data: any) => {
      this.playersData = data;
    });
    this.DataFetchService.getGoals().subscribe((data: any) => {
      this.goalsData = data;
    });
  }

  onPlayerSelected(data: any) {
    this.EnableCard = false;
    this.selectedData = data;
    this.getPlayersGoals(this.selectedData);
    this.getPlayersSecondvalue(this.selectedData);
  }

  getPlayersGoals(selectedValue: any) {
    this.matchedGoalsdata = this.goalsData.filter(data =>
      (data?.Player?.toLowerCase().includes(selectedValue?.player?.lastname?.toLowerCase()) ||
        data?.Player?.toLowerCase().includes(selectedValue?.player?.firstname?.toLowerCase())) &&
      data?.Nationality?.toLowerCase().includes(selectedValue?.player?.nationality?.toLowerCase())
    );
    // this.chartData = this.matchedGoalsdata.map(item => ({
    //   label: item["Initial Year"].toString(),
    //   y: item["Stat"]
    // }));
    this.chartOptions = {
      title: {
        text: "Goal Stats"
      },
      data: [{
        type: "column",
        dataPoints: []
      }]
    };
    this.chartOptions.data[0].dataPoints = this.matchedGoalsdata.map(item => ({
      label: item['Initial Year'],
      y: item.Stat
    }));
  }

  getPlayersSecondvalue(selectedValue: any) {
    this.secondData = {
      chart: {
        caption: "Countries with Highest Deforestation Rate",
        subcaption: "For the year 2023",
        yaxisname: "Deforested Area{br}(in Hectares)",
        decimals: "1",
        theme: "candy"
      },
      data: [
        {
          label: "Brazil",
          value: "356287"
        },
        {
          label: "Indonesia",
          value: "101977"
        },
        {
          label: "DR Congo",
          value: "94495"
        },
        {
          label: "Angola",
          value: "48865"
        },
        {
          label: "Tazmania",
          value: "44962"
        },
        {
          label: "Myanmar",
          value: "41213"
        },
        {
          label: "Paraguay",
          value: "36463"
        },
        {
          label: "Bolivia",
          value: "26915"
        },
        {
          label: "Mozambique",
          value: "25614"
        },
        {
          label: "Argentina",
          value: "25602"
        }
      ]
    };
    this.dataSource = this.secondData;
  }
}
