import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { WorkspaceComponent } from './workspace/workspace.component';
import { HeaderToolbarComponent } from './workspace/header-toolbar/header-toolbar.component';
import { SidebarComponent } from './workspace/sidebar/sidebar.component';
import { WorkspaceDataModule } from './workspace/workspace-data/workspace-data.module';
import { WorkspaceRoutingModule } from './workspace/workspace-routing.module';

@NgModule({
  declarations: [ 
    AppComponent,
    LoginComponent,
    WorkspaceComponent,
    HeaderToolbarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    WorkspaceDataModule,
    WorkspaceRoutingModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
