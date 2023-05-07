import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { error } from 'console';
import { debounceTime, delay, forkJoin, from, last, map, mergeAll, mergeMap, Observable, of, reduce, switchMap, tap } from 'rxjs';
import { Actor } from 'src/app/models/actor';
import { ActorCredits } from 'src/app/models/actorCredits';
import { FilteredMovies } from 'src/app/models/filteredMovies';
import { ApiResponse, Movie } from 'src/app/models/movie';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiKey: String = "83a288f16dbbac1ab03c01357b00eeae";
  allMovies: Movie[] = [];
  constructor(private httpClient: HttpClient) { }

  //method that sets poster url to original url if exists
  getPoster(posterPath: string | null) {
    if (!posterPath) {
      return '../assets/images/poster-missing.jpeg'; //set the local image for missing poster
    } else {
      //or get the image for local folder if null
      return `https://image.tmdb.org/t/p/original${posterPath}`; //build the entire url for poster
    }
  }

  getFilteredMovies(data: any): Observable<Movie[]> {
    let allMovies: Movie[] = [];
    return this.getActorIdByNameSurname(data.actor).pipe(
      switchMap(actorId => {
        data.actor = actorId;
        if (!data.voteAvgFrom) {   //replace vote average with empty string if undefined
          data.voteAvgFrom = '';
        }
        if (!data.release_date) {   //replace release date with empty string if undefined
          data.release_date = '';
        }
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&with_original_language=${data.language}&with_genres=${data.genre}&vote_average.gte=${data.voteAvgFrom}&sort_by=${data.sortParameter}&primary_release_year=${data.releaseDate}&release_date.gte=${data.dateFrom}&release_date.lte=${data.dateTo}&with_cast=${data.actor}&page=`;
        console.log(url);
        return forkJoin([   //get results of first 5 pages
          this.httpClient.get<ApiResponse>(`${url}1`),
          this.httpClient.get<ApiResponse>(`${url}2`),
          this.httpClient.get<ApiResponse>(`${url}3`),
          this.httpClient.get<ApiResponse>(`${url}4`),
          this.httpClient.get<ApiResponse>(`${url}5`)
        ]).pipe(
          map(responses => {
            responses.forEach((response: ApiResponse) => {
              const movies: Movie[] = response.results || [];
              const newMovies = movies.map(movie => ({
                adult: movie.adult,
                backdrop_path: movie.backdrop_path,
                belongs_to_collection: movie.belongs_to_collection,
                budget: movie.budget,
                genres: movie.genres,
                homepage: movie.homepage,
                id: movie.id,
                imdb_id: movie.imdb_id,
                original_language: movie.original_language,
                original_title: movie.original_title,
                overview: movie.overview,
                popularity: movie.popularity,
                poster_path: this.getPoster(movie.poster_path),
                production_companies: movie.production_companies,
                production_countries: movie.production_countries,
                release_date: movie.release_date,
                revenue: movie.revenue,
                runtime: movie.runtime,
                spoken_languages: movie.spoken_languages,
                status: movie.status,
                tagline: movie.tagline,
                title: movie.title,
                video: movie.video,
                vote_average: movie.vote_average,
                vote_count: movie.vote_count
              }));
              allMovies = [...allMovies, ...newMovies]; //include newMovies in allMovies array
            });
            return allMovies;
          })
        );
      })
    );
  }

  //get Actor data passing its name and surname
  getActor(actorName: string | undefined, actorSurname: string | undefined) {
    return this.httpClient.get<Actor>(`https://api.themoviedb.org/3/search/person?api_key=${this.apiKey}&query=${actorName}+${actorSurname}`);
  }

  //get Actor data passing its name + surname as a unique string
  getActorIdByNameSurname(actorName: string | undefined): Observable<string> {
    if (!actorName) {
      return of('');
    }
    console.log(actorName?.toLocaleLowerCase());
    return this.httpClient.get<Actor>(`https://api.themoviedb.org/3/search/person?api_key=${this.apiKey}&query=${actorName?.toLocaleLowerCase()}`)
      .pipe(
        map(actor => actor.results[0].id?.toString() || '')
      );
  }

  //Not used (below)
  //get actor data using its ID
  getActorCredits(actorId: number | undefined) {
    return this.httpClient.get<ActorCredits>(`https://api.themoviedb.org/3/person/${actorId}?api_key=${this.apiKey}&append_to_response=credits`)
  }

  //get a movie by ID - Italian language translation of its data
  getMovieById(movieId: number | null) {
    return this.httpClient.get<Movie>(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.apiKey}&language=it-it`);
  }

  //get all movies using the discover url of TMDB built on Angular Welcome Component
  getMovies(searchString: string) { //new method that takes the whole url query
    return this.httpClient.get<Movie[]>(searchString);
  }

}
