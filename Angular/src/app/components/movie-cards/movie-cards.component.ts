import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'tnv-movie-cards',
  templateUrl: './movie-cards.component.html',
  styleUrls: ['./movie-cards.component.scss']
})
export class MovieCardsComponent implements OnInit {

  apiKey: string = '83a288f16dbbac1ab03c01357b00eeae';
  movieId: number | null = 550;
  movie: Partial<Movie> = {};
  imgUrl: string = "";

  constructor(private httpClient:HttpClient){
  }


  ngOnInit(): void {
    this.getMovie();   
  }

  getMovieById(movieId: number | null){
    return this.httpClient.get<Movie>(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.apiKey}&language=it-it`);
  }

  getPosterMovie(posterPath: string | undefined){
    return `https://image.tmdb.org/t/p/original${posterPath}`;
  }
 
  getMovie() {
    this.getMovieById(this.movieId).subscribe(
      {
        next: (res) =>{ 
        this.movie = res; 
        this.imgUrl = this.getPosterMovie(this.movie.poster_path);
      }
      });      
  }
}
