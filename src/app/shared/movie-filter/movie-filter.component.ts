import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.scss']
})
export class MovieFilterComponent {
  @Input() filterRange;

  @Output() setFilterEvent: EventEmitter<any> = new EventEmitter();

  currentFilter = '';
  constructor() { }

  setFilter(year) {
    this.currentFilter = year;
    this.setFilterEvent.emit(year);
  }

}
