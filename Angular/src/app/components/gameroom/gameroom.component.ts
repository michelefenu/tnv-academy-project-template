import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MovieService } from 'src/app/@core/services/movie.service';
import { Movie,MovieResponse } from 'src/app/models/movie';

@Component({
  selector: "tnv-gameroom",
  templateUrl: "./gameroom.component.html",
  styleUrls: ["./gameroom.component.scss"],
})
export class GameroomComponent implements OnInit {
  allMovies!: MovieResponse;
  movieData!: Movie;
  genres!: string;
  release!: string;
  description!: string;
  production!: string;
  poster!: string;
  imageurl: string = "https://image.tmdb.org/t/p/w500";

  userInput!: string;
  guess!: boolean;

  constructor(private movieService: MovieService) {}

  RandomMovie(): void {
    if (this.allMovies.results.length > 0) {
      // indice casuale array di film
      const randomIndex = Math.floor(Math.random() * this.allMovies.results.length);

      // Assegna il film casuale a movieData
      this.movieData = this.allMovies.results[randomIndex];
      console.log("Film casuale scelto:", this.movieData);
      // Assegna alle variabili del componente
      this.genres = this.movieData.original_language;
      this.release = this.movieData.release_date;
      this.description = this.movieData.overview;
      this.production = this.movieData.original_title;
      this.poster = this.imageurl + this.movieData.poster_path;
    }
  }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((data) => {
      this.allMovies = data;
      this.RandomMovie();
      console.log("stampa un film", this.movieData);
      console.log("stampa tutti film", this.allMovies.results);
    });
  }

  onSubmit(form: NgForm) {
    console.log("Input utente:", this.userInput);
    console.log("Titolo film:", this.movieData.title);

    const title = this.movieData.title;
    if (this.userInput.toLowerCase() === title.toLowerCase()) {
      this.guess = true;
      // confronto positivo
    } else {
      this.guess = false;
      // confronto negativo
    }
  }
}

