// ranking-detail.component.ts

import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/@core/services/auth.service';
import { GiocoTimeService } from 'src/app/@core/services/gioco-time.service';
import { MovieService } from 'src/app/@core/services/movie.service';
import { RatingService } from 'src/app/@core/services/rating.service';
import { ReviewService } from 'src/app/@core/services/review.service';
import { Movie } from 'src/app/models/movie';
import { Rating } from 'src/app/models/rating';
import { Review } from 'src/app/models/review';

@Component({
  selector: 'tnv-ranking-detail',
  templateUrl: './ranking-detail.component.html',
  styleUrls: ['./ranking-detail.component.scss']
})
export class RankingDetailComponent implements OnInit {
  @Input() movie!: Movie;
  @Input() review!: Review;
  @Input() rating!: Rating;

  ratingUser!: Rating;
  movietitle!: string;


  constructor(
    private movieService: MovieService,
    private ratingService: RatingService, 
    private tempoGioco: GiocoTimeService, 
    private userService: AuthService,
    private reviewService: ReviewService) {}

  ngOnInit(): void {

    //this.userService.getCurrentUser().id;

    this.ratingUtente('2'); 
  }

  ratingUtente(userId: string) {
    this.ratingService.getRatingByUserId(userId).subscribe(
      (valutazioni) => {
       this.ratingUser = valutazioni;
        console.log("dati",this.ratingUser);
      },
      (errore) => {
      
        console.error(errore);
      }
    );

   this.movietitle = this.ratingUser.movieTitle;
  }
     


  }


