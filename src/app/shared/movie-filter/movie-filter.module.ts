import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieFilterComponent } from './movie-filter.component';

@NgModule({
  declarations: [MovieFilterComponent],
  imports: [CommonModule],
  exports: [MovieFilterComponent]
})
export class MovieFilterModule { }
