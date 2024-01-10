import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'tnv-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent  {
  /*implements OnInit
  @Input() selectedYear: number | undefined;
  @Input() selectedGenre: number | undefined;
  @Input() selectedLanguage: string | undefined;
  @Input() selectedPopularityGrade: string | undefined;
  @Input() selectedDuration: number | undefined;


  movies: any[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.getMovies();
  }

  ngOnChanges(): void {
    this.getMovies();
  }

  private getMovies(): void {
    this.movieService.getMoviesByFilter(filter).subscribe(data => {
      this.movies = data.results;
      console.log("Miao", data.results);
    });
  }*/
}
