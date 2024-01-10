import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-film-card-favourite',
  templateUrl: './film-card-favourite.component.html',
  styleUrls: ['./film-card-favourite.component.scss'],
})
export class FilmCardFavouriteComponent {
  @Input() movie: any;
  isRatingVisible = false;
  @Output() removeMovie = new EventEmitter();
  @Output() ratingDelete = new EventEmitter();
  @Output() userRatingChange: EventEmitter<any> = new EventEmitter();

  ranking: { rating: number } = { rating: 0 };
  constructor() { }

  onRemoveClick() {
    this.removeMovie.emit(this.movie.movieId);
    //console.log("invia movieId", this.movie.movieId);
  }

  onRemoveRatingClick(){
    this.ratingDelete.emit(this.movie.movieId);
  }

  onRatingButtonClick() {
    // Cambia lo stato per mostrare/nascondere la tendina
    this.isRatingVisible = !this.isRatingVisible;
  }
  
  onUserRatingChange(newRating: number) {
    this.ranking.rating = newRating;  // Aggiorna il valore della valutazione
    this.userRatingChange.emit(newRating);
  }
}