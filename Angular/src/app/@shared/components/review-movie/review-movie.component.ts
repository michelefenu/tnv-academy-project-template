import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { TmdService } from '../../servicesTMD/tmd.service';
import { RatingService } from '../../servicesRating/rating.service';
import { Rating } from 'src/app/models/rating';
import { Observable } from 'rxjs';


@Component({
  selector: 'tnv-review-movie',
  templateUrl: './review-movie.component.html',
  styleUrls: ['./review-movie.component.scss']
})
export class ReviewMovieComponent implements OnInit{
    reviewform: FormGroup;

    title: string;
    //
    movieId: string = "15";
  //
    completeUserRating: Rating;
    
    val = {
      reviewTitle: "inserisci qui il titolo della tua recensione!",
      reviewField: "inserisci qui la tua recensione!",
      ratingMovie: 1
    }
    

    constructor(public tmdService: TmdService, public ratingService: RatingService){
      this.title = tmdService.movieTitle;
      
    }

    ngOnInit(): void {

      
    }

    

    sendReview(){
      console.log(this.val.reviewField);
      console.log(this.val.reviewTitle);
      console.log(this.val.ratingMovie);
      this.completeUserRating = this.generateRatingObject(this.completeUserRating);
      console.log(this.completeUserRating);
      this.ratingService.addRating(this.completeUserRating);
      
    }

    generateRatingObject(userRating: Rating){
      userRating = {
        userId: this.val.reviewTitle,
        movieId: this.movieId,
        rating: this.val.ratingMovie,
        review: this.val.reviewField,
      }
      return userRating;
    }

    giocaAncora(){
      location.reload();
    }



}

