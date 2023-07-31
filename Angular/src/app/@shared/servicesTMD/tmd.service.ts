import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { AppModule } from 'src/app/app.module'; //no togliere


@Injectable({
  providedIn: 'root'
})
export class TmdService {

  movie: Movie;
  poster: string;
  movieTitle: string;
  posterIsPresent: boolean = false;
  
  

  constructor(private http: HttpClient ) {
    //variabile contenente l'url di tutte le immagini di "The Movie Database". Viene agganciata durante la get sottostante al "poster_path" ottenuto tramite API.
    //questo procedimento genera l'immagine che viene poi contenuta in "this.poster"
    this.poster = "http://image.tmdb.org/t/p/original"  
  }

  getMovie(movieId: number){
    this.http.get<Movie>(`https://api.themoviedb.org/3/movie/${movieId}?language=it-IT&api_key=8401b10a43e9d31af2e82091f450d1f4`)
    .subscribe({
      next: (response) => {
        this.movie = response;
        this.poster += response.poster_path; //vedi commento su
        this.movieTitle = response.title;
        this.posterIsPresent = true;
      },
      error: (error) => 
        console.log('Errore', error)
    })
  }


}
