import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { NotesService } from './services/notes.service';


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
  providers: [NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
