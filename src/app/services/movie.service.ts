import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(public apiService: ApiService) {}

  getMovies(title) {
    const params = { s: title };
    return this.apiService.get('/', params);
  }

  getMovieDetail(id) {
    const params = { i: id };
    return this.apiService.get('/', params);
  }
}
