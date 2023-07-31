import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TmdService } from '../../servicesTMD/tmd.service';
import { RatingService } from '../../servicesRating/rating.service';
import { Rating } from 'src/app/models/rating';
import { ActivatedRoute, Router } from '@angular/router';
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
    rating: number = 0;
    currentUser: User;
    
  //
    @Input() savedTotalTime: number = 0;
  //
    completeUserRating: Rating = {
      idReview: 0,
      userId: 0,
      movieId: 0,
      rating: 0,
      review: '',
      totalTime: 0,
      movieTitle: '',
      moviePoster: ''
    };
    
    val = {
      reviewField: "inserisci qui la tua recensione!",
      ratingMovie: 1
    }
    

    constructor(public tmdService: TmdService, public ratingService: RatingService, public router: Router, public authService: AuthService, public authGuard: AuthGuard, public activatedRoute: ActivatedRoute){
      this.title = tmdService.movieTitle;
      this.currentUser = JSON.parse(localStorage.getItem("user") || '') as User;
      this.movieId = tmdService.movie.id;
      

      
    }

    ngOnInit(): void {
      console.log()
      
    }

    

    sendReview(){
      this.completeUserRating.userId = this.currentUser.id;
      this.completeUserRating.movieId = this.movieId;
      this.completeUserRating.rating = this.val.ratingMovie;
      this.completeUserRating.review = this.val.reviewField;
      this.completeUserRating.totalTime = this.savedTotalTime;
      this.completeUserRating.movieTitle = this.tmdService.movieTitle;
      this.completeUserRating.moviePoster = this.tmdService.poster;

    

      this.ratingService.addRating(this.completeUserRating).subscribe({
        next: (res: Rating) => {
          this.completeUserRating = res;
          this.router.navigateByUrl("/favorites");
        },
        error: (error: any) => {
          console.error("errore", error);
        }
      });
    }


    giocaAncora(){
      location.reload();
    }



  

}

