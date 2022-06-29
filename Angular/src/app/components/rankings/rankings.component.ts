import { Component, OnInit } from "@angular/core";
import { Posizione } from "src/app/@models/classifica";

@Component({
  selector: "tnv-rankings",
  templateUrl: "./rankings.component.html",
  styleUrls: ["./rankings.component.scss"],
})
export class RankingsComponent implements OnInit {
  classifica: Posizione[] = [
    { position: 1, username: "string", titleFilm: "string", timeSpend: 2 },
    { position: 2, username: "string", titleFilm: "string", timeSpend: 12 },
    { position: 3, username: "string", titleFilm: "string", timeSpend: 22 },
  ];
  constructor() {}

  ngOnInit(): void {}
}
