// ranking-detail.component.ts

import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from 'src/app/@core/services/movie.service';
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


  constructor(private movieService: MovieService) {}

  ngOnInit(): void {

  }

}
