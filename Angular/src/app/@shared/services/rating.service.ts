import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, switchMap } from 'rxjs';
import { Rating } from 'src/app/models/rating';

@Injectable({
  providedIn: 'root',
})
export class RatingService {
  API_ROOT = 'http://localhost:1234/api';

  constructor(private httpClient: HttpClient) {}

  getMovies(userId: string) {
    return this.httpClient.get<Rating>(`${this.API_ROOT}/rating/${userId}`);
  }

  getRating(userId: string, movieId: string) {
    return this.httpClient.get<Rating>(`${this.API_ROOT}/ratings/${userId}/${movieId}`);
  }

  addRating(rating: Rating) {
    return this.httpClient.post<Rating>(`${this.API_ROOT}/rating`, rating);
  }

  editRating(rating: Rating) {
    return this.httpClient.patch<Rating>(`${this.API_ROOT}/ratings/${rating.id}`, rating)
      .pipe(switchMap(() => this.getRating(rating.userId, rating.movieId)));
  }

  deleteRating(id: string) {
    return this.httpClient.delete(`${this.API_ROOT}/rating/${id}`);
  }


  getRatingsByUserId(userId: string) { //OK
    return this.httpClient.get<Rating[]>(`${this.API_ROOT}/ratings/userid/${userId}`).pipe(
      map(ratings => ratings.filter(rating => rating.userId === userId))
    );
  }

  getRatingByMovieId(movieId: string) {
    return this.httpClient.get<Rating[]>(`${this.API_ROOT}/ratings/movieid/${movieId}`).pipe(
      map(ratings => ratings.filter(rating => rating.movieId === movieId))
    );
  }
}