import { Injectable } from "@angular/core";
import { CommentRequest, CommentResponse } from "../@models/comment";
import { HttpClient } from "@angular/common/http";
import { Posizione } from "../@models/classifica";
import { AuthService } from "../@core/services/auth.service";

@Injectable({
  providedIn: "root",
})
export class FavoritesService {
  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {}

  getFavoritesByUserId() {
    const user = this.authService.getCurrentUser();
    if (!user) return;
    return this.httpClient.get<Posizione[]>(
      `http://localhost:1234/api/favorites/${user.id}`
    );
  }

  createComment(movieId: number, userComment: string) {
    const user = this.authService.getCurrentUser();
    if (!user) return;
    const userId = user.id;

    const body: CommentRequest = {
      userId,
      movieId,
      userComment,
    };

    return this.httpClient.post<CommentResponse>(
      "http://localhost:5286/api/comments",
      body
    );
  }

  getMovieCommentById(commentId: number) {
    return this.httpClient.get<Posizione>(
      `http://localhost:5286/api/rating/${commentId}`
    );
  }

  deleteMovie(movieId: number) {
    const user = this.authService.getCurrentUser();
    if (!user) return;
    const userId = user.id;

    return this.httpClient.delete<Posizione>(
      `http://localhost:1234/api/rating/${userId}/${movieId}`
    );
  }

  deleteMovieComment(movieId:number){
    return this.httpClient.delete<CommentResponse>(
      `http://localhost:5286/api/comments/${movieId}`
    );
  }

  getMovieById(movieId:number){
    return this.httpClient.get<CommentResponse>(
      `http://localhost:1234/api/rating/${movieId}`
    );
  }

  
}
