import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ClubsComponent } from './clubs/clubs.component';
import { CompetitionsComponent } from './competitions/competitions.component';
import { CountriesComponent } from './countries/countries.component';
import { LiveComponent } from './live/live.component';
import { MatchesComponent } from './matches/matches.component';
import { PlayersComponent } from './players/players.component';
import { WorkspaceRoutingModule } from '../workspace-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { WorkspaceDataComponent } from './workspace-data.component';
import { CardComponent } from '../card/card.component';

@NgModule({
  declarations: [
    AboutComponent,
    ClubsComponent,
    CompetitionsComponent,
    CountriesComponent,
    LiveComponent,
    MatchesComponent,
    PlayersComponent,
    WorkspaceDataComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    WorkspaceRoutingModule
  ]
})
export class WorkspaceDataModule { }
