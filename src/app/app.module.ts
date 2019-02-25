import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieModule } from './shared/movie/movie.module';
import { MoviesListModule } from './layouts/movies-list/movies-list.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryApiService } from './services/in-memory-api.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // Comment out this line if mock data is not needed
    HttpClientInMemoryWebApiModule.forRoot(InMemoryApiService, { passThruUnknownUrl: true, apiBase: '/' }),
    MoviesListModule,
    MovieModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
