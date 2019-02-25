import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../definitions';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnDestroy {
  movies: Movie[] = [];
  filteredMovies: Movie[] = [];
  allMoviesSubscription: Subscription;
  movieDetailSubscription: Subscription;

  constructor(private movieService: MovieService) {
    this.fetchMovies();
  }

  filterMovies(year) {
    this.filteredMovies = this.movies
      .filter(movie => movie.Year <= year.toString())
      .sort((prev, next) => {
        if (prev.Year > next.Year) {
          return 1;
        }

        if (prev.Year < next.Year) {
          return -1;
        }

        return 0;
      }).reverse();
  }

  fetchMovies() {
    this.allMoviesSubscription = this.movieService.getMovies('Batman').subscribe((response) => {
      response.Search.forEach((movie: Movie) => {
        this.movieDetailSubscription = this.movieService.getMovieDetail(movie.imdbID)
          .subscribe((movieDetail) => {
            this.movies.push(movieDetail);
            this.movies = this.movies.slice(0);
            this.filterMovies(this.yearsForFilter[0]);
          });
      });

    });
  }

  get yearsForFilter() {
    let filterRange = [];
    if (this.movies.length) {
      const movieYears = this.movies.map(movie => {
        if (movie.Year.split('–').length > 1) {
          return Number(movie.Year.split('–')[1]);
        }
        return Number(movie.Year);
      });


      let max = movieYears.reduce((prev, next) => Math.max(prev, next));
      let min = movieYears.reduce((prev, next) => Math.min(prev, next));

      max = Math.ceil(max / 10) * 10;
      min = Math.floor(min / 10) * 10;

      for (let i = min; i <= max; i += 10) {
        filterRange.push(i);
      }
    }

    filterRange = filterRange.slice(0).sort().reverse();

    return filterRange;
  }

  ngOnDestroy() {
    if (this.allMoviesSubscription) {
      this.allMoviesSubscription.unsubscribe();
    }

    if (this.movieDetailSubscription) {
      this.movieDetailSubscription.unsubscribe();
    }
  }

}
