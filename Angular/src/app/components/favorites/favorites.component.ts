import { Component, OnInit } from '@angular/core';
import { RatingService } from 'src/app/@shared/servicesRating/rating.service';
import { TmdService } from 'src/app/@shared/servicesTMD/tmd.service';
import { Movie } from 'src/app/models/movie';
import { Rating } from 'src/app/models/rating';
import { User } from 'src/app/models/user';

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

  ngOnInit(): void {
   this.getReviewsArray();
  }

  constructor(public ratingService: RatingService, public tmdService: TmdService){
    this.currentUser= JSON.parse(localStorage.getItem("user") || '') as User;
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

  getCurrentMovie(){
    this.tmdService.getMovie(this.currentMovie.id);
  }

  

}
