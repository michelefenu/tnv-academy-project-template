import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { TmdService } from '../../servicesTMD/tmd.service';
import { RatingService } from '../../servicesRating/rating.service';
import { Rating } from 'src/app/models/rating';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/@core/servicesAuth/auth.service';
import { AuthGuard } from 'src/app/@core/helpers/auth-guard';
import { User } from 'src/app/models/user';


@Component({
  selector: 'tnv-review-movie',
  templateUrl: './review-movie.component.html',
  styleUrls: ['./review-movie.component.scss']
})
export class ReviewMovieComponent implements OnInit{
    reviewform: FormGroup;

    title: string;
    movieId: number;

    currentUser: User;
    
  //
    completeUserRating: Rating = {
      idNomeReview: 0,
      userId: 0,
      movieId: 0,
      rating: 0,
      review: ''
    };
    
    val = {
      reviewTitle: "inserisci qui il titolo della tua recensione!",
      reviewField: "inserisci qui la tua recensione!",
      ratingMovie: 1
    }
    

    constructor(public tmdService: TmdService, public ratingService: RatingService, public router: Router, public authService: AuthService, public authGuard: AuthGuard){
      this.title = tmdService.movieTitle;
      this.movieId = 10;
      
    }

    ngOnInit(): void {

      
    }

    

    sendReview(){
      this.completeUserRating.idNomeReview = 5;
      this.completeUserRating.movieId = this.movieId;
      this.completeUserRating.review = this.val.reviewField;
      this.completeUserRating.rating = this.val.ratingMovie;
      this.completeUserRating.userId = 2;
      console.log(this.completeUserRating.idNomeReview);
      console.log(this.completeUserRating.userId);
      console.log(this.completeUserRating.movieId);
      console.log(this.completeUserRating.rating);
      console.log(this.completeUserRating.review);

      this.ratingService.addRating(this.completeUserRating).subscribe({
        next: (res: Rating) => {
          this.completeUserRating = res;
          this.router.navigateByUrl("/home");
        },
        error: (error: any) => {
          console.error("errore");
        }
      });
    }


    giocaAncora(){
      location.reload();
    }



}

