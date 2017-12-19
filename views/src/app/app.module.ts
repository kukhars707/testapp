import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { NotesService } from './services/notes.service';
import { GroupsService } from './services/groups.service';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
      RouterModule,
      HttpModule,
      JsonpModule
  ],
  providers: [NotesService, GroupsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
