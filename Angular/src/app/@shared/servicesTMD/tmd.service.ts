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

  
  

  constructor(private http: HttpClient ) {
    this.poster = "http://image.tmdb.org/t/p/original"  //link condiviso per il passaggio di immagini per regolamento di tmd. ci accodiamo per ogni chiamata la restante parte specifica di ogni immagine
  }

  getMovie(movieId: number){
    this.http.get<Movie>(`https://api.themoviedb.org/3/movie/${movieId}?api_key=8401b10a43e9d31af2e82091f450d1f4`)
    .subscribe({
      next: (response) => {
        this.movie = response;
        this.poster += response.poster_path; //vedi commento su
        this.movieTitle = response.title;
      },
      error: (error) => console.log('Errore', error)
      
    })
  }


}
