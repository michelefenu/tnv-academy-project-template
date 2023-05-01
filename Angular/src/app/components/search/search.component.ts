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

  @Output() foundMovies = new EventEmitter<Movie[]>(); // emit search results to parent component

  movies: any = [];

  //Query emit to welcome component (parent)
  @Output() searchStringToEmit = new EventEmitter<string>();
  searchString = ''

  //TEST
  @Output() ActorToEmit = new EventEmitter<string>();
  @Input() actorToFind = '';

  constructor(dataPipe: DatePipe) {
    this.datePipe = dataPipe;
  }

  onCreateQuery(){
    this.searchStringToEmit.emit(this.searchString);
  }

  onSearchActor(actorString: string){
    console.log(actorString); //TEST
    if (actorString) {
      this.ActorToEmit.emit(actorString); //TEST
      console.log(this.ActorToEmit);
    }
  }

  search(f: NgForm) {
    const APIKEY = "1ce8b34c9c9e676aa0072abcba688089";
    const actor = f.value.actor; //TEST
    this.onSearchActor(f.value.actor); //TEST

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
    console.log('SEARCHCOMP ACTOR ID: ', this.actorToFind); //TEST OK gets the value (slow)

    if (!sortParameter) {
      alert("Please fill the order by section to create a timeline");
      return;
    }

    //setting the query to send to service and removing null values
    const searchString = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&page=1&with_original_language=${language}&with_genres=${genre}&vote_average.gte=${voteAvgFrom}&sort_by=${sortParameter}&primary_release_year=${releaseDate}&release_date.gte=${from}&release_date.lte=${to}&with_cast=${this.actorToFind}`;
    const queryString = searchString.replace(/null/g, ''); //global replacement of null fields
    this.searchString = queryString;
   
    this.onCreateQuery();
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

  getFormattedDate(date: string): string | null {
    if (!date) {
      return '';
    }
    const formattedDate = this.datePipe.transform(date, 'yyyy-MM-dd');
    return formattedDate;
  }

}
