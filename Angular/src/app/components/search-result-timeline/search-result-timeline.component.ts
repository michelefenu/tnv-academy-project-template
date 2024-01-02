import { Component, Input, OnChanges, OnInit } from "@angular/core";
import { MovieService } from "../../movie.service";
import { error } from "console";

@Component({
  selector: 'tnv-search-result-timeline',
  templateUrl: './search-result-timeline.component.html',
  styleUrl: './search-result-timeline.component.scss'
})
export class SearchResultTimelineComponent {

	@Input() moviesList!: any[];

	public yearsOfMovies: any[];
	
	constructor() {
    this.yearsOfMovies=[];
  }

	ngOnChanges() {
		//0: ottenere solo anno da data
		for (let movie of this.moviesList) {
			let year = movie.release_date.substring(0, 4);
			this.yearsOfMovies.push(year);
		}
		// 1 - set di anni 
		const years = [...new Set(this.yearsOfMovies)];
    this.yearsOfMovies=years;
    this.yearsOfMovies.sort();
	}

  filterMovieByYear = (year: string): string[] =>  {
    let result = [];
    for(let movie of this.moviesList){
      if(movie.release_date.substring(0, 4)===year){
        result.push(movie);
      }
    }
    return result;
  }
}
