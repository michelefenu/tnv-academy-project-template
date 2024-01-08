import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs';
import { Rating } from 'src/app/models/rating';

@Injectable({
  providedIn: 'root',
})
export class RatingService {
  API_ROOT = 'http://localhost:1234/api';

  constructor(private httpClient: HttpClient) {}


  getRating(userId: string, movieId: string) {
    return this.httpClient.get<Rating>(`${this.API_ROOT}/ratings/${userId}/${movieId}`);
  }

  addRating(rating: Rating) {
    return this.httpClient.post<Rating>(`${this.API_ROOT}/ratings/`, rating);
  }

  editRating(rating: Rating) {
    return this.httpClient.patch<Rating>(`${this.API_ROOT}/ratings/${rating.id}`, rating)
      .pipe(switchMap(() => this.getRating(rating.userId, rating.movieId)));
  }

  deleteRating(id: string) {
    return this.httpClient.delete(`${this.API_ROOT}/ratings/${id}`);
  }
}