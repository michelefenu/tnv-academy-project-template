import { Component, OnInit } from "@angular/core";
import { RankingsService } from "src/app/@service/rankings.service";
import { Posizione } from "../../@models/classifica";

@Component({
  selector: "tnv-rankings",
  templateUrl: "./rankings.component.html",
  styleUrls: ["./rankings.component.scss"],
})
export class RankingsComponent implements OnInit {
  classifica: Posizione[] = [];

  constructor(private rankingsService: RankingsService) {}

  ngOnInit(): void {
    this.rankingsService.getRankings().subscribe({
      next: (response) => {
        console.log(response);
        this.classifica = response;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
