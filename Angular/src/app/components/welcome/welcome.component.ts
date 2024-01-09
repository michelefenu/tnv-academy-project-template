import { Component, OnInit, ViewChild } from "@angular/core";
import { SearchComponent } from "../search/search.component";
import { TrendingSectionComponent } from "../trending-section/trending-section.component";
import { MovieService } from "src/app/movie.service";
import { catchError } from "rxjs";
import { error } from "console";
import { Filter } from "src/app/models/filter";

@Component({
	selector: "tnv-welcome",
	templateUrl: "./welcome.component.html",
	styleUrls: ["./welcome.component.scss"],
})
export class WelcomeComponent implements OnInit {
	currentSearch: string = "";
	actorName: string = "";
	filter!: Filter;
  showYear: boolean = false;

	public movieResult: any[] = [];
	public yearsOfMovies: any[] = [];

	constructor(private movieService: MovieService) {}
	ngOnInit(): void {}

	public searchMoviesByActor(actorName: string) {
		this.actorName = actorName;
		this.movieService.getMoviesByActor(this.actorName).subscribe({
			next: (result) => {
					//console.log(result);
					this.movieResult = result;
					this.yearsOfMoviesValues(result);
				
			},
			error: (error) => {
				console.error("Errore durante la chiamata API", error);
			}
	});
	}

	public searchByTitle(title: string) {
		this.currentSearch = title;
		this.movieService.getMoviesByTitle(this.currentSearch).subscribe({
			next: (response) => {
				this.movieResult = response.results;
				this.yearsOfMoviesValues(response.results);
			},
			error: (err) => console.log(err),
		});
	}

	public getMovies(event: any) {
		this.filter = event;
		this.movieService.getMoviesByFilter(event).subscribe((data) => {
			this.movieResult = data.results;
			this.yearsOfMoviesValues(data.results);
	  
    })
	}

  yearsOfMoviesValues = (movieResult: any[])=>{
			//0: ottenere solo anno da data
			for (let movie of movieResult) {
				if (movie.release_date != "") {
					let year = movie.release_date.substring(0, 4);
					this.yearsOfMovies.push(year);
				}
			}
			// 1 - set di anni
			let years = [...new Set(this.yearsOfMovies)];
			this.yearsOfMovies = years;
			this.yearsOfMovies.sort();
      //console.log("getMovies yearsOfMovies",this.yearsOfMovies);
  }

  
}
