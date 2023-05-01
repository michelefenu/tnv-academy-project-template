import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'tnv-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  private readonly datePipe: DatePipe;

  @Output() foundMovies = new EventEmitter<Movie[]>(); //emit search results to parent component
  movies: any = [];

  //Query emit to welcome component (parent)
  @Output() searchStringToEmit = new EventEmitter<string>();
  searchString = ''

  //TEST
  @Output() ActorToEmit = new EventEmitter<string>(); //emit name+surname of the actor to find to parent component
  @Input() actorToFind = '';                          //gets the id of the actor from parent component

  constructor(dataPipe: DatePipe) {
    this.datePipe = dataPipe;                         //module to format dates
  }

  onCreateQuery(){
    this.searchStringToEmit.emit(this.searchString);  //emit the url for API request to parent component Welcome
  }

  onSearchActor(actorString: string){                 //method to emit name+surname of an actor
    console.log(actorString); //test
    if (actorString) {                                //if compiled by the user in search form
      this.ActorToEmit.emit(actorString);       
    }
  }

  search(f: NgForm) {
    const APIKEY = "1ce8b34c9c9e676aa0072abcba688089";  //Api key (possibly move it into service changing the code)
    const actor = f.value.actor;                        
    this.onSearchActor(f.value.actor);                  
    //other data form form
    const genre = f.value.genre;
    const releaseDate = f.value.releaseDate;
    const sortParameter = f.value.sortParameter
    const voteAvgFrom = f.value.voteAvgFrom;
    const language = f.value.language;
    const dateFrom = f.value.dateFrom;
    const dateTo = f.value.dateTo;

    //formatting data from module
    const from = this.getFormattedDate(dateFrom);
    const to = this.getFormattedDate(dateTo);

    if (!sortParameter) {     //alter if sortParameter is not selected form the user
      alert("Please fill the order by section to create a timeline");
      return;
    }

    //setting the url to send to service and removing null values
    const searchString = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&page=1&with_original_language=${language}&with_genres=${genre}&vote_average.gte=${voteAvgFrom}&sort_by=${sortParameter}&primary_release_year=${releaseDate}&release_date.gte=${from}&release_date.lte=${to}&with_cast=${this.actorToFind}`;
    const queryString = searchString.replace(/null/g, ''); //global replacement of null fields
    this.searchString = queryString;                       //save the string to be emitted
   
    this.onCreateQuery();                                   //emit string via method
    // this.http.get(queryString).subscribe({
    //   next: (response: any) => {
    //     this.movies = response.results;
    //     this.foundMovies.emit(this.movies); // emit search results to parent component
    //   },
    //   error: (error: any) => {
    //     console.log(error);
    //     this.movies = [];
    //   }
    // });
  
  }

  //method to format date to be compatible with url api request on TMDB site
  getFormattedDate(date: string): string | null {
    if (!date) {
      return '';
    }
    const formattedDate = this.datePipe.transform(date, 'yyyy-MM-dd');
    return formattedDate;
  }

}
