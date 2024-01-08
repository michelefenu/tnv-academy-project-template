import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-film-card-favourite',
  templateUrl: './film-card-favourite.component.html',
  styleUrls: ['./film-card-favourite.component.scss'],
})
export class FilmCardFavouriteComponent {
  @Input() movie: any;
  @Output() removeMovie = new EventEmitter();

  constructor() { }

  onRemoveClick() {
    this.removeMovie.emit(this.movie.movieId);
    //console.log("invia movieId", this.movie.movieId);
  }
}