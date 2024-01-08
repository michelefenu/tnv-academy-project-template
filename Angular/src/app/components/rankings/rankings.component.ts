import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { Rating } from 'src/app/models/rating';
import { Review } from 'src/app/models/review';

@Component({
  selector: 'tnv-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.scss']
})
export class RankingsComponent implements OnInit {

  constructor() { }

  movie!: Movie;
  review!: Review;
  rating!: Rating;

  ngOnInit(): void {
  }

}
