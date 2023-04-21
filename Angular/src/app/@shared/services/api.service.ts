import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actor } from 'src/app/models/actor';
import { ActorCredits } from 'src/app/models/actorCredits';
import { FilteredMovies } from 'src/app/models/filteredMovies';
import { Movie } from 'src/app/models/movie';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiKey: String = "83a288f16dbbac1ab03c01357b00eeae";


  constructor(private httpClient: HttpClient) {

  }

  getActor(actorName: string | undefined, actorSurname: string | undefined){
   return this.httpClient.get<Actor>(`https://api.themoviedb.org/3/search/person?api_key=${this.apiKey}&query=${actorName}+${actorSurname}`); 
  }

  getActorCredits(actorId: number | undefined){
    return this.httpClient.get<ActorCredits>(`https://api.themoviedb.org/3/person/${actorId}?api_key=${this.apiKey}&append_to_response=credits`)
  }


  getMovieById(movieId: number | null) {
    return this.httpClient.get<Movie>(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.apiKey}&language=it-it`);
  }

  getPoster(posterPath: string | undefined) {
    return `https://image.tmdb.org/t/p/original${posterPath}`;
  }

  getMoviesFiltered(genre: string | null, averageVote: number | null, releaseYear: string | null) {
    return this.httpClient.get<FilteredMovies>(`https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}
                                &page=1&with_original_language=en
                                &with_genres=${genre}
                                &vote_average.gte=${averageVote}                                
                                &sort_by=primary_release_date.desc
                                &primary_release_year=${releaseYear}`);
  }

}
