
//movie.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie, MovieResponse } from 'src/app/models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=f6440e97063436b16714f99cdb7da862';
  selectedMovie!: Movie;
 
   constructor(private http: HttpClient) { }

  getMovies(): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(this.apiUrl);
  }

  getMovieDetailsById(movieId: number): Observable<Movie> {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=f6440e97063436b16714f99cdb7da862`;
    return this.http.get<Movie>(url);
  }

  setSelectedMovie(movie: Movie): void {
    this.selectedMovie = movie;
  }

  getSelectedMovie(): Movie {
    return this.selectedMovie;
  }
 
}