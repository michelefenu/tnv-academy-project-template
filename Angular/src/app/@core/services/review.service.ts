import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs';
import { Rating } from 'src/app/models/rating';
import { Review } from 'src/app/models/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  API_ROOT = 'http://localhost:1234/api';

  constructor(private httpClient: HttpClient) {}

  getReview(userId: string, movieId: string) {
    return this.httpClient.get<Review>(`${this.API_ROOT}/review/${userId}/${movieId}`);
  }

  getReviewByUserId(userId: string) {
    return this.httpClient.get<Review>(`${this.API_ROOT}/review/${userId}`);
  }

  addReview(review: Review) {
    return this.httpClient.post<Review>(`${this.API_ROOT}/review/`, review);
  }

  editReview(review: Review) {
    return this.httpClient.patch<Rating>(`${this.API_ROOT}/review/${review.id}`, review)
      .pipe(switchMap(() => this.getReview(review.userId, review.movieId)));
  }

  deleteReview(id: string) {
    return this.httpClient.delete(`${this.API_ROOT}/review/${id}`);
  }
}




