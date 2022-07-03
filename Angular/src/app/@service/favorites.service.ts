import { Injectable } from "@angular/core";
import { Favoriti } from "../@models/favoriti";
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

  getCommentByUserIdAndMovieId(movieId: number) {
    if (!this.stringUser) return;
    const userId = JSON.parse(this.stringUser).id;
    console.log({ userId, movieId });
    //TODO: costruire query string params
    return this.httpClient.get<Favoriti>(
      "http://localhost:4200/assets/commenti-db.json"
    );
  }
}
