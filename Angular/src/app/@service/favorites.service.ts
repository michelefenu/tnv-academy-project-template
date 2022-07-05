import { Injectable } from "@angular/core";
import { Comment } from "../@models/comment";
import { HttpClient } from "@angular/common/http";
import { Posizione } from "../@models/classifica";

@Injectable({
  providedIn: "root",
})
export class FavoritesService {
  stringUser = localStorage.getItem("user");
  constructor(private httpClient: HttpClient) {}

  getFavoritesByUserId() {
    if (!this.stringUser) return;
    const userId = JSON.parse(this.stringUser).id;
    // chiamare node con tutti i dati sui film, voto e tempo gioco,
    return this.httpClient.get<Posizione[]>(
      `http://localhost:1234/api/favorites/${userId}`
    );
  }

  createComment(movieId: number, userComment: string) {
    if (!this.stringUser) return;
    const userId = JSON.parse(this.stringUser).id;

    const body = {
      userId,
      movieId,
      userComment,
    };
    console.log({ body });

    const headers = new Headers();
    headers.append("Access-Control-Allow-Origin", "*");
    const httpOptions: any = {
      headers: headers,
    };

    return this.httpClient.post<Comment>(
      "http://localhost:5286/api/comments/",
      body,
      httpOptions
    );
  }

  getMovieCommentById(commentId: number) {
    if (!this.stringUser) return;

    return this.httpClient.get<Posizione>(
      "http://localhost:5286/api/comments/" + commentId
    );
  }

  deleteMovie(movieId: number) {
    if (!this.stringUser) return;
    const userId = JSON.parse(this.stringUser).id;

    return this.httpClient.delete<Posizione>(
      "http://localhost:1234/api/rating/" + userId + movieId
    );
  }
}
