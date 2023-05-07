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
  @Output() searchToEmit = new EventEmitter<any>(); 
  dataFromForm: any = {};

  constructor(dataPipe: DatePipe) {
    this.datePipe = dataPipe;                         //module to format dates
  }

  searchForValues() {
    console.log('SEARCHCOMPO DATA TO FIND ', this.dataFromForm);
    this.searchToEmit.emit(this.dataFromForm);  //emit the url for API request to parent component Welcome
  }

  search(f: NgForm) {
    const searchFormData = {                   
      actor: f.value.actor || '',
      genre: f.value.genre || '',
      releaseDate: f.value.releaseDate || '',
      sortParameter: f.value.sortParameter || '',
      voteAvgFrom: f.value.voteAvgFrom || '',
      language: f.value.language || '',
      dateFrom: this.getFormattedDate(f.value.dateFrom) || '',
      dateTo: this.getFormattedDate(f.value.dateTo) || ''
    };
    searchFormData.actor = searchFormData.actor.replace(/ /g, '+');     //replace space char with + symbol compatible with url Api request
    console.log(`Actor to find ${searchFormData.actor}`);     //TEST of replacement
    this.dataFromForm = searchFormData;       //save values as property class
    console.log('SEARCHCOMPO DATA TO FIND ', this.dataFromForm);
    if (!searchFormData.sortParameter) {     //alert and return if sortParameter is not selected form the user
      alert("Please fill the order by section to create a timeline");
      return;
    }
    this.searchToEmit.emit(this.dataFromForm);  //emit the url for API request to parent component Welcome
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
