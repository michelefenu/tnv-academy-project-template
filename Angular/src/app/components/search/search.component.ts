import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'tnv-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  movies: any = [];

  constructor(private http: HttpClient) { }

  search(f: NgForm) {
    console.log(f.value);

    const APIKEY = "1ce8b34c9c9e676aa0072abcba688089";

    const genre = f.value.genre;
    const releaseDate = f.value.releaseDate;
    const sortParameter = f.value.sortParameter
    const voteAvgFrom = f.value.voteAvgFrom;
    const language = f.value.language;
    const dateFrom = f.value.dateFrom;
    const dateTo = f.value.dateTo;
    // const searchString = `https://api.themoviedb.org/3/discover/movie?api_key=4cd1fa7f6243bb50ecc7fcbfe050eb83&language=en-US&sort_by=primary_release_date.desc&with_genres=${genre}&primary_release_year=${releaseDate}&limit=10`;

    const searchString = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&page=1&with_original_language=${language}&with_genres=${genre}&vote_average.gte=${voteAvgFrom}&sort_by=${sortParameter}&primary_release_year=${releaseDate}&release_date.gte=${dateFrom}&release_date.lte=${dateTo}`;
    this.http.get(searchString).subscribe({
      next: (response: any) => (this.movies = response.results),
    });
  }
}