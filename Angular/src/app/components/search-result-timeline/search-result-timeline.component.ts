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
  //@Input() moviesResult: any[] = [];
  @Input() actorName: string = "";


	public yearsOfMovies: any[];
	
	constructor() {
    this.yearsOfMovies=[];
  }

	ngOnChanges() {
		//0: ottenere solo anno da data
		for (let movie of this.moviesList) {
      if(movie.release_date!=""){
			  let year = movie.release_date.substring(0, 4);
			  this.yearsOfMovies.push(year);
      }
		}
		// 1 - set di anni 
		const years = [...new Set(this.yearsOfMovies)];
    this.yearsOfMovies=years;
    this.yearsOfMovies.sort();
	}

  //filtra film per anno per vedere in timeline i film divisi per anno 
  filterMovieByYear = (year: string): string[] =>  {
    let result = [];
    console.log(year);
    for(let movie of this.moviesList){
      if(movie.release_date!="" && movie.release_date.substring(0, 4)===year){
        result.push(movie);
      }
    }
    return result;
  }
}
