import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/@core/servicesAuth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TmdService {

  movie: Movie [] = [];

  API_TMD = "https://api.themoviedb.org/3/trending/movie/week?api_key=8401b10a43e9d31af2e82091f450d1f4";

  constructor(private httpClient: HttpClient ) {}


  getTrendingMovies() {

    return this.httpClient.get<Movie>(`${this.API_TMD}`)
    //return this.httpClient.get<Movie>(`${this.API_TMD}/ratings/${userId}/${movieId}`);
  }
}
