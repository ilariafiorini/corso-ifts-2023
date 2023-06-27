import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmComponent } from './film/film.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmListComponent,
    FilmComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
