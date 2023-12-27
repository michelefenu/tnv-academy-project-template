import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = '363a63846c046b7a3c0d656f3881759b';
  private apiUrl = 'https://api.themoviedb.org/3';

  constructor(private httpClient: HttpClient) { }

  //funzione che chiama i film trend del momento
  getTrendingMovies(): Observable<any> {
    const url = `${this.apiUrl}/movie/popular?api_key=${this.apiKey}`;
    return this.httpClient.get(url);
  }

  //funzione per ottenere film per attore
  getMoviesByActor(actorName: string): Observable<any> {
    const url = `${this.apiUrl}/search/person?api_key=${this.apiKey}&query=${actorName}`;
    //chiamata per ottenere id attore
    return this.httpClient.get(url).pipe(
      map((response: any) => {
        const actorId = response.results[0].id;
        //chaimata per ottenere i film tramite id attore
        const moviesUrl = `${this.apiUrl}/discover/movie?api_key=${this.apiKey}&with_people=${actorId}`;
        return this.httpClient.get(moviesUrl);
      })
    );
  }
}
