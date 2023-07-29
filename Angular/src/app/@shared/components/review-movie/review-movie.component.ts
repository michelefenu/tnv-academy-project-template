import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { TmdService } from '../../servicesTMD/tmd.service';
import { RatingService } from '../../servicesRating/rating.service';
import { Rating } from 'src/app/models/rating';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/@core/servicesAuth/auth.service';
import { AuthGuard } from 'src/app/@core/helpers/auth-guard';


@Component({
  selector: 'tnv-review-movie',
  templateUrl: './review-movie.component.html',
  styleUrls: ['./review-movie.component.scss']
})
export class ReviewMovieComponent implements OnInit{
    reviewform: FormGroup;

    title: string;
    movieId: number;
    
  //
    completeUserRating: Rating;
    
    val = {
      reviewTitle: "inserisci qui il titolo della tua recensione!",
      reviewField: "inserisci qui la tua recensione!",
      ratingMovie: 1
    }
    

    constructor(public tmdService: TmdService, public ratingService: RatingService, public router: Router, public authService: AuthService, public authGuard: AuthGuard){
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
      this.ratingService.addRating(this.completeUserRating).subscribe({
        next: (res: Rating) => {
          this.completeUserRating = res;
          this.router.navigateByUrl("/profile");
        },
        error: (error: any) => {
          console.error("errore");
        }
      });
    }

    generateRatingObject(userRating: Rating){
      userRating = {
        userId: "esempio",
        movieId: "this.movieId",
        rating: this.val.ratingMovie,
        review: this.val.reviewField,
      }
      return userRating;
    }

    giocaAncora(){
      location.reload();
    }



}

