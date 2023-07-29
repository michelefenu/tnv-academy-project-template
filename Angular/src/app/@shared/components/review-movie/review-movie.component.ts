import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { TmdService } from '../../servicesTMD/tmd.service';
import { RatingService } from '../../servicesRating/rating.service';
import { Rating } from 'src/app/models/rating';


@Component({
  selector: 'tnv-review-movie',
  templateUrl: './review-movie.component.html',
  styleUrls: ['./review-movie.component.scss']
})
export class ReviewMovieComponent implements OnInit{
  reviewform: FormGroup;

    title: string;


    

      
      /* id?: string,
      userId: string,
      movieId: string,
      rating: number */
  
   // reviewedMovie: Rating = {
      //review: "scrivi qui una recensione, non superare le 150 parole!",
      //rating: 0,
     // userId: ""
   // }//;

    

    constructor(tmdService: TmdService, ratingService: RatingService){
      this.title = tmdService.movieTitle;
    }

    ngOnInit(): void {
      

      
    }

    sendReview(/* reviewform: NgForm, ratingService: RatingService */){
      


      /* console.log(reviewform.value)
      console.log(this.val.rating, this.val.review) */
    }

}
