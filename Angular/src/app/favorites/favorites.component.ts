import { Component, EventEmitter, OnInit } from '@angular/core';
import { Rating } from '../models/rating';
import { Movie } from '../models/movie';
import { User } from '../models/user';
import { RatingService } from '../@shared/servicesRating/rating.service';
import { TmdService } from '../@shared/servicesTMD/tmd.service';

@Component({
  selector: 'tnv-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit{

  review: Rating;
  reviewsArray: Rating [] = [];
  currentMovie: Movie;
  currentUser: User;
  idSurrogato: number = 7;



  constructor(public ratingService: RatingService, public tmdService: TmdService){
    this.currentUser= JSON.parse(localStorage.getItem("user") || '') as User;
  }

  ngOnInit(): void {
    
    this.getReviewsArray();

}


getReviewsArray(){
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


 onDeleteReview(review: Rating){
  console.log(review.movieId)
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



