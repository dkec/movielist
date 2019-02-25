import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Movie } from '../../definitions';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {
  @Input() movie: Movie;
  constructor() { }

  extractImageName(imagePath) {
    const imagePathInArray = imagePath.split('/');
    return imagePathInArray[imagePathInArray.length - 1];
  }
}
