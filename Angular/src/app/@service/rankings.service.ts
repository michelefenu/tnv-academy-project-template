import { Injectable } from "@angular/core";
import { Posizione } from "../@models/classifica";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class RankingsService {
  constructor(private httpClient: HttpClient) {}

  getRankings() {
    return this.httpClient.get<Posizione[]>("http://localhost:1234/api/rating");
  }

  addRating(posizione : Partial<Posizione>) {
    return this.httpClient.post<Posizione[]>("http://localhost:1234/api/rating", posizione);
  }
}


