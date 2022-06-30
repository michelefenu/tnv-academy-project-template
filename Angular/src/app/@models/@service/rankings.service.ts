import { Injectable } from "@angular/core";
import { Posizione } from "../classifica";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class RankingsService {
  constructor(private httpClient: HttpClient) {}

  getRankings() {
    return this.httpClient.get<Posizione[]>(
      "http://localhost:4200/assets/db.json"
    );
  }
}
