import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataFetchService } from '../data-fetch.service';

const apiKey = '304711fae6e0c89fb7a175541119cfdb';
const apiUrl = 'https://v3.football.api-sports.io/players?league=39&season=2023&page=2';

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

  goalsChartOptions: any = {
  }

  appearanceData: any[] = [];

  matchedAppearanceData: any[] = [];

  appearanceChartOptions: any = {

  }

  assistsData: any[] = [];

  matchedAssistsData: any[] = [];

  assistsChartOptions: any = {

  }

  penaltiesConceidedData: any[] = [];
  penaltiesSavedData: any[] = [];
  penaltiesChartOptions: any = {
  }
  matchedpenaltiesConceidedData: any[] = [];
  matchedpenaltiesSavedData: any[] = [];

  fusionChartObject = {
    column3d: {
      width: '600',
      height: '400',
      type: "column3d",
      dataFormat: "json"
    },
    line: {
      width: '600',
      height: '400',
      type: "line",
      dataFormat: "json"
    },
    pie3d: {
      width: '600',
      height: '400',
      type: "pie3d",
      dataFormat: "json"
    },
    mssplinearea: {
      width: '600',
      height: '400',
      type: "mssplinearea",
      dataFormat: "json"
    }
  };

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
    this.DataFetchService.getAppearances().subscribe((data: any) => {
      this.appearanceData = data;
    });
    this.DataFetchService.getAssists().subscribe((data: any) => {
      this.assistsData = data;
    });
    this.DataFetchService.getPenaltiesConceided().subscribe((data: any) => {
      this.penaltiesConceidedData = data;
    });
    this.DataFetchService.getPenaltiesSaved().subscribe((data: any) => {
      this.penaltiesSavedData = data;
    })
  }

  onPlayerSelected(data: any) {
    this.EnableCard = false;
    this.selectedData = data;
    this.getPlayersGoals(this.selectedData);
    this.getAppearances(this.selectedData);
    this.getAssists(this.selectedData);
    this.getPenalties(this.selectedData);
  }

  getPlayersGoals(selectedValue: any) {
    this.matchedGoalsdata = this.goalsData.filter(data =>
      (data?.Player?.toLowerCase().includes(selectedValue?.player?.name?.toLowerCase())) &&
      data?.Nationality?.toLowerCase().includes(selectedValue?.player?.nationality?.toLowerCase())
    );
    this.goalsChartOptions = {
      chart: {
        caption: "Goal Statistics",
        subcaption: selectedValue.player.name,
        yaxisname: "Goals{br}(in Numbers)",
        decimals: "1",
        enablesmartlabels: "0",
        theme: "candy",
        usedataplotcolorforlabels: "1",
        xaxisname: "Years"
      },
      data: [
      ]
    };
    let uniqueLabels = new Set();
    (this.goalsChartOptions as any)['data'] = this.matchedGoalsdata.map(item => ({
      "label": item['Initial Year'].toString(),
      "value": item.Stat.toString()
    })).filter(item => {
      if (uniqueLabels.has(item.label)) {
        return false;
      } else {
        uniqueLabels.add(item.label);
        return true;
      }
    });
  }

  getAppearances(selectedValue: any) {
    this.matchedAppearanceData = this.appearanceData.filter(data =>
      (data?.Player?.toLowerCase().includes(selectedValue?.player?.name?.toLowerCase())) &&
      data?.Nationality?.toLowerCase().includes(selectedValue?.player?.nationality?.toLowerCase())
    );
    this.appearanceChartOptions = {
      chart: {
        caption: "Appearances",
        subcaption: selectedValue.player.name.toString(),
        decimals: "1",
        theme: "fusion",
        enablesmartlabels: "0",
        usedataplotcolorforlabels: "1",
        yaxisname: "Appearance in Matches{br}(in Numbers)",
        xaxisname: "Years"
      },
      data: [
      ]
    };
    let uniqueLabels = new Set();
    (this.appearanceChartOptions as any)['data'] = this.matchedAppearanceData.map(item => ({
      "label": item['Initial Year'].toString(),
      "value": item.Stat.toString()
    })).filter(item => {
      if (uniqueLabels.has(item.label)) {
        return false;
      } else {
        uniqueLabels.add(item.label);
        return true;
      }
    });
  }

  getAssists(selectedValue: any) {
    this.matchedAssistsData = this.assistsData.filter(data =>
      (data?.Player?.toLowerCase().includes(selectedValue?.player?.name?.toLowerCase())) &&
      data?.Nationality?.toLowerCase().includes(selectedValue?.player?.nationality?.toLowerCase())
    );
    this.assistsChartOptions = {
      chart: {
        caption: "Assists",
        subcaption: selectedValue.player.name.toString(),
        decimals: "1",
        theme: "fusion",
        enablesmartlabels: "0",
        usedataplotcolorforlabels: "1",
        yaxisname: "Assists in Matches{br}(in Numbers)",
        xaxisname: "Years"
      },
      data: [
      ]
    };
    let uniqueLabels = new Set();
    (this.assistsChartOptions as any)['data'] = this.matchedAssistsData.map(item => ({
      "label": item['Initial Year'].toString(),
      "value": item.Stat.toString()
    })).filter(item => {
      if (uniqueLabels.has(item.label)) {
        return false;
      } else {
        uniqueLabels.add(item.label);
        return true;
      }
    });
  }

  getPenalties(selectedValue: any) {
    this.matchedpenaltiesConceidedData = this.penaltiesConceidedData.filter(data =>
      (data?.Player?.toLowerCase().includes(selectedValue?.player?.name?.toLowerCase())) &&
      data?.Nationality?.toLowerCase().includes(selectedValue?.player?.nationality?.toLowerCase())
    );
    this.matchedpenaltiesSavedData = this.penaltiesSavedData.filter(data =>
      (data?.Player?.toLowerCase().includes(selectedValue?.player?.name?.toLowerCase())) &&
      data?.Nationality?.toLowerCase().includes(selectedValue?.player?.nationality?.toLowerCase())
    );
    console.log(this.matchedpenaltiesConceidedData, this.matchedpenaltiesSavedData);
    this.penaltiesChartOptions = {
      chart: {
        caption: "Penalties",
        yaxisname: "Number of penalties",
        // numbersuffix: "M",
        subcaption: "(Conceided Vs Saved)",
        yaxismaxvalue: "6",
        plottooltext:
          selectedValue?.player?.name + " $seriesName penalty <b>$dataValue</b> times in $label",
        theme: "fusion"
      },
      categories: [
        {
          category: []
        }
      ],
      dataset: [
        {
          seriesname: "Conceided",
          data: []
        },
        {
          seriesname: "Saved",
          data: []
        }
      ]
    };
    (this.penaltiesChartOptions as any)['dataset'][0]['data'] = this.matchedpenaltiesConceidedData.map(item => ({
      "value": item.Stat.toString()
    }));
    (this.penaltiesChartOptions as any)['dataset'][1]['data'] = this.matchedpenaltiesSavedData.map(item => ({
      "value": item.Stat.toString()
    }));

    let uniqueLabels = new Set();
    let conceidedCategories = this.matchedpenaltiesConceidedData.map(item => ({
      "label": item['Initial Year'].toString()
    }));

    let savedCategories = this.matchedpenaltiesSavedData.map(item => ({
      "label": item['Initial Year'].toString()
    }));

    let mergedCategories = [...conceidedCategories, ...savedCategories].filter(item => {
      if (uniqueLabels.has(item.label)) {
        return false;
      } else {
        uniqueLabels.add(item.label);
        return true;
      }
    });

    (this.penaltiesChartOptions as any)['categories'][0]['category'] = mergedCategories;

  }
}
