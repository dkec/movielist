import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './movies-list.component';
import { MovieModule, MovieFilterModule } from '../../shared';

@NgModule({
  declarations: [MoviesListComponent],
  imports: [
    CommonModule,
    MovieModule,
    MovieFilterModule
  ]
})
export class MoviesListModule { }
