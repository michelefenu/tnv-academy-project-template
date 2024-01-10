// ranking-detail.component.ts

import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/@core/services/auth.service';
import { GiocoTimeService } from 'src/app/@core/services/gioco-time.service';
import { MovieService } from 'src/app/@core/services/movie.service';
import { RatingService } from 'src/app/@core/services/rating.service';
import { ReviewService } from 'src/app/@core/services/review.service';
import { Movie } from 'src/app/models/movie';
import { Preferiti } from 'src/app/models/preferiti';
import { Rating } from 'src/app/models/rating';
import { Review } from 'src/app/models/review';
import { RankingsComponent } from '../rankings/rankings.component';

@Component({
  selector: 'tnv-ranking-detail',
  templateUrl: './ranking-detail.component.html',
  styleUrls: ['./ranking-detail.component.scss']
})
export class RankingDetailComponent implements OnInit {

@Input() data!: Preferiti 
   




  constructor(
    private movieService: MovieService,
    private ratingService: RatingService, 
    private tempoGioco: GiocoTimeService, 
    private userService: AuthService,
    private reviewService: ReviewService) {}

  ngOnInit(): void {
    
   
   

    console.log("datad",this.data);

  

    


  }

}
