import { NgModule } from '@angular/core';
import { ClubsComponent } from './workspace-data/clubs/clubs.component';
import { MatchesComponent } from './workspace-data/matches/matches.component';
import { PlayersComponent } from './workspace-data/players/players.component';
import { CompetitionsComponent } from './workspace-data/competitions/competitions.component';
import { CountriesComponent } from './workspace-data/countries/countries.component';
import { AboutComponent } from './workspace-data/about/about.component';
import { LiveComponent } from './workspace-data/live/live.component';
import { WorkspaceDataComponent } from './workspace-data/workspace-data.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'workspace-data',
    component: WorkspaceDataComponent,
    children: [
      { path: 'clubs', component: ClubsComponent },
      { path: 'competitions', component: CompetitionsComponent },
      { path: 'countries', component: CountriesComponent },
      { path: 'live', component: LiveComponent },
      { path: 'matches', component: MatchesComponent },
      { path: 'players', component: PlayersComponent },
      { path: 'about', component: AboutComponent },
      // Add more routes as needed
      { path: '', redirectTo: 'clubs', pathMatch: 'full' }, // Default route
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class WorkspaceRoutingModule { }
