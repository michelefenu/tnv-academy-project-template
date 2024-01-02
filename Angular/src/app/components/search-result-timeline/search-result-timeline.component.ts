import { Component, Input, OnChanges, OnInit } from "@angular/core";
import { MovieService } from "../../movie.service";
import { error } from "console";

@Component({
  selector: 'tnv-search-result-timeline',
  templateUrl: './search-result-timeline.component.html',
  styleUrl: './search-result-timeline.component.scss'
})
export class SearchResultTimelineComponent {

	@Input() moviesByTitle!: any[];

	public yearsOfMoviesByTitle: any[];
	public movieResultByYear: any[];

	constructor() {
    this.movieResultByYear=[];
    this.yearsOfMoviesByTitle=[];
  }

	ngOnChanges() {
		//0: ottenere solo anno da data
		for (let movie of this.moviesByTitle) {
			let year = movie.release_date.substring(0, 4);
			this.yearsOfMoviesByTitle.push(year);
		}
		// 1 - set di anni 
		const years = [...new Set(this.yearsOfMoviesByTitle)];
    this.yearsOfMoviesByTitle=years;
    this.yearsOfMoviesByTitle.sort();

    //creare raggruppamenti di film per anno
    
    for(let year of this.yearsOfMoviesByTitle) {
      for(let movie of this.moviesByTitle){
        if(movie.release_date.substring(0, 4)===year){
          this.movieResultByYear.push(movie);
        }
      }
    }


	}

  filterMovieByYear = (year: string): string[] =>  {
    let result = [];
    for(let movie of this.moviesByTitle){
      if(movie.release_date.substring(0, 4)===year){
        result.push(movie);
      }
    }
    return result;
  }
}
