import { Component, OnInit } from '@angular/core';
import { Rating } from '../../models/rating';
import { Movie } from '../../models/movie';
import { User } from '../../models/user';
import { RatingService } from '../../@shared/servicesRating/rating.service';
import { TmdService } from '../../@shared/servicesTMD/tmd.service';

@Component({
  selector: 'tnv-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.scss']
})
export class FavoritesPageComponent implements OnInit {

  review: Rating;
  reviewsArray: Rating[] = [];
  currentMovie: Movie;
  currentUser: User;


  constructor(public ratingService: RatingService, public tmdService: TmdService) {
    this.currentUser = JSON.parse(localStorage.getItem("user") || '') as User;
  }

  ngOnInit(): void {
    this.getReviewsArray();
  }


  getReviewsArray() {
    this.ratingService.getRatings(this.currentUser.id)
      .subscribe({
        next: (res: Rating[]) => {
          this.reviewsArray = res;
          console.log(this.reviewsArray)
        },
        error: (error: any) => {
          console.log('Errore', error)
        }
      });
  }

  /* getStars è una funzione che restituisce un array di numeri
     rappresentanti il numero di stelline piene da visualizzare */
  getStars(rating: number): number[] {
    /* Utilizziamo Array.fill() per creare un array di lunghezza uguale al voto
       ad esempio, se il rating è 4, restituirà [0, 0, 0, 0]
       poi usiamo ngFor nell'HTML per visualizzare le stelline piene */
    return Array(Math.floor(rating)).fill(0);
  }

  /* getEmptyStars è una funzione simile a getStars, ma restituisce un array di numeri
     rappresentanti il numero di stelline vuote da visualizzare */
  getEmptyStars(rating: number): number[] {
    /* Utilizziamo Array.fill() per creare un array di lunghezza uguale alle stelline vuote
       ad esempio, se il rating è 4, restituirà [0]
       poi usiamo ngFor nell'HTML per visualizzare le stelline vuote */
    return Array(Math.floor(5 - rating)).fill(0);
  }

  onDeleteReview(review: Rating) {
    this.ratingService.deleteRating(review.movieId).subscribe({
      next: () => {
        this.getReviewsArray();
        console.log('review eliminata');
      },
      error: (error: any) => {
        console.log('errore', error)
      }

    })
  }

}




