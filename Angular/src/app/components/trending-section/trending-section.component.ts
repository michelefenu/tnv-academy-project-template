import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'tnv-trending-section',
  templateUrl: './trending-section.component.html',
  styleUrl: './trending-section.component.scss',
  standalone: false
})
export class TrendingSectionComponent implements OnInit {
  trendingMovies: any[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getTrendingMovies().subscribe(data => {
      this.trendingMovies = data.results;
    });
  }
}


