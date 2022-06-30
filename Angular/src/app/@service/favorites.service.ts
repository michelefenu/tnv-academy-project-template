import { Injectable } from "@angular/core";
import { Favoriti } from "../@models/favoriti";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class FavoritesService {
  constructor(private httpClient: HttpClient) {}

  getFavorites() {
    return this.httpClient.get<Favoriti[]>(
      "http://localhost:4200/assets/db.json"
    );
  }
}
