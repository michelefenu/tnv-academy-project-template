import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'tnv-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  private readonly datePipe: DatePipe;

  @Output() onSearch = new EventEmitter<any>(); // emit search results to parent component

  movies: any = [];

  constructor(private http: HttpClient, dataPipe: DatePipe) {
    this.datePipe = dataPipe;
  }

  search(f: NgForm) {
    const APIKEY = "1ce8b34c9c9e676aa0072abcba688089";

    const genre = f.value.genre;
    const releaseDate = f.value.releaseDate;
    const sortParameter = f.value.sortParameter
    const voteAvgFrom = f.value.voteAvgFrom;
    const language = f.value.language;
    const dateFrom = f.value.dateFrom;
    const dateTo = f.value.dateTo;

    const test1 = this.getFormattedDate(dateFrom);
    const test2 = this.getFormattedDate(dateTo);

    const searchString = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&page=1&with_original_language=${language}&with_genres=${genre}&vote_average.gte=${voteAvgFrom}&sort_by=${sortParameter}&primary_release_year=${releaseDate}&release_date.gte=${test1}&release_date.lte=${test2}`;

    const queryString = searchString.replace(/null/g, '');

    this.http.get(queryString).subscribe({
      next: (response: any) => {
        this.movies = response.results;
        this.onSearch.emit(this.movies); // emit search results to parent component
      },
      error: (error: any) => {
        console.log(error);
        this.movies = [];
      }
    });
  }

  getFormattedDate(date: string): string | null {
    if (!date) {
      return '';
    }
    const formattedDate = this.datePipe.transform(date, 'yyyy-MM-dd');
    return formattedDate;
  }

}
