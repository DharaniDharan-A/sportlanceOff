import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const apiKey = '304711fae6e0c89fb7a175541119cfdb';
const apiUrl = 'https://v3.football.api-sports.io/teams/countries';

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

  
  playerData = [
    {
      "name": "Lionel Messi",
      "position": "Forward",
      "club": "Paris Saint-Germain",
      "country": "Argentina",
      "age": 35,
      "goals": 700,
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Lionel_Messi_WC2022.jpg/220px-Lionel_Messi_WC2022.jpg"
    },
    {
      "name": "Cristiano Ronaldo",
      "position": "Forward",
      "club": "Manchester United",
      "country": "Portugal",
      "age": 37,
      "goals": 750,
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Cristiano_Ronaldo_2018.jpg/220px-Cristiano_Ronaldo_2018.jpg"
    },
    {
      "name": "Kylian Mbappé",
      "position": "Forward",
      "club": "Paris Saint-Germain",
      "country": "France",
      "age": 24,
      "goals": 120,
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Kylian_Mbapp%C3%A9_2018.jpg/220px-Kylian_Mbapp%C3%A9_2018.jpg"
    },
    {
      "name": "Mohamed Salah",
      "position": "Forward",
      "club": "Liverpool",
      "country": "Egypt",
      "age": 29,
      "goals": 150,
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Mohamed_Salah_2016.jpg/220px-Mohamed_Salah_2016.jpg"
    },
    {
      "name": "Kevin De Bruyne",
      "position": "Midfielder",
      "club": "Manchester City",
      "country": "Belgium",
      "age": 31,
      "assists": 80,
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Kevin_de_Bruyne_2018.jpg/220px-Kevin_de_Bruyne_2018.jpg"
    },
    {
      "name": "Neymar Jr.",
      "position": "Forward",
      "club": "Paris Saint-Germain",
      "country": "Brazil",
      "age": 30,
      "goals": 90,
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Neymar_Jr._2017.jpg/220px-Neymar_Jr._2017.jpg"
    },
    {
      "name": "Sergio Ramos",
      "position": "Defender",
      "club": "Paris Saint-Germain",
      "country": "Spain",
      "age": 36,
      "clean_sheets": 120,
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Sergio_Ramos_2018.jpg/220px-Sergio_Ramos_2018.jpg"
    },
    {
      "name": "Robert Lewandowski",
      "position": "Forward",
      "club": "Bayern Munich",
      "country": "Poland",
      "age": 34,
      "goals": 200,
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Robert_Lewandowski_2018.jpg/220px-Robert_Lewandowski_2018.jpg"
    },
    {
      "name": "Harry Kane",
      "position": "Forward",
      "club": "Tottenham Hotspur",
      "country": "England",
      "age": 28,
      "goals": 130
    },
    {
      "name": "Bruno Fernandes",
      "position": "Midfielder",
      "club": "Manchester United",
      "country": "Portugal",
      "age": 28,
      "assists": 50
    }
  ]


  countryData: { [key: string]: string } = {
    Argentina: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
    Portugal: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/1200px-Flag_of_Portugal.svg.png'
  }

  EnableCard: boolean = true;

  selectedData: any = {};

  ValueParam?: ValueParameters;

  constructor(private http: HttpClient) { }

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
      primaryvalue: ['name'],
      secondaryvalue: ['country'],
      image: ['image']
    }
  }

  getFlag(country: string) {
    return this.countryData[country];
  }

  onPlayerSelected(data: any) {
    this.EnableCard = false;
    this.selectedData = data;
  }
}
