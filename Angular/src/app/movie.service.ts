import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, observable, switchMap } from 'rxjs';
import { map } from 'rxjs';
import { of } from 'rxjs';


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
    const actorSearchUrl = `${this.apiUrl}/search/person?api_key=${this.apiKey}&query=${actorName}`;
    
    return this.httpClient.get(actorSearchUrl).pipe(
      switchMap((response: any) => {
        const actorId = response.results[0]?.id;
        
        if (actorId) {
          const moviesUrl = `${this.apiUrl}/discover/movie?api_key=${this.apiKey}&with_people=${actorId}`;
          
          return this.httpClient.get(moviesUrl);
        } else {
          // Ritorna un array vuoto se non è presente alcun attore con il nome specificato
          return of([]);
        }
      }),
      map((moviesResponse: any) => moviesResponse.results)
    );
  }
  /* getMoviesByActor(actorName: string): Observable<any> {
    const url = `${this.apiUrl}/search/person?api_key=${this.apiKey}&query=${actorName}`;
    
    return this.httpClient.get(url).pipe(
      switchMap((response: any) => {
        const actorId = response.results[0]?.id;
  
        if (actorId) {
          const moviesUrl = `${this.apiUrl}/discover/movie?api_key=${this.apiKey}&with_people=${actorId}`;
          return this.httpClient.get(moviesUrl);
        } else {
          return of([]);
        }
      }),
      catchError(error => {
        console.error('Error fetching movies:', error);
        return of([]);
      })
    );
  } */
}
