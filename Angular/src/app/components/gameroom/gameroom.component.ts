import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MovieService } from 'src/app/@core/services/movie.service';
import { TimerService } from 'src/app/@core/services/timer.service';
import { Movie, MovieResponse } from 'src/app/models/movie';

@Component({
  selector: 'tnv-gameroom',
  templateUrl: './gameroom.component.html',
  styleUrls: ['./gameroom.component.scss'],
})
export class GameroomComponent implements OnInit {
  allMovies!: MovieResponse;
  movieData!: Movie;
  genres!: string;
  release!: string;
  description!: string;
  production!: string;
  poster!: string;
  imageurl: string = 'https://image.tmdb.org/t/p/w500';

  userInput!: string;
  guess!: boolean;

  secondsElapsed = 0;
  
  

 constructor(private router:Router ,private movieService: MovieService, private timeService: TimerService) {
    
    
  }

 RandomMovie(): void {
    if (this.allMovies.results.length > 0) {
      // indice casuale array di film
      const randomIndex = Math.floor(Math.random() * this.allMovies.results.length);

      // Assegna il film casuale a movieData
      this.movieData = this.allMovies.results[randomIndex];

      
      this.movieService.getMovieDetailsById(this.movieData.id).subscribe((details: Movie) => {
        // Assegna alle variabili del componente
      
        this.genres = details.genres[0].name
        this.release = details.release_date;
        this.description = details.overview;
        this.production = details.production_companies[0].name;
        this.poster = this.imageurl + details.poster_path;
        this.movieService.setSelectedMovie(details);
        
      });
    }
  }

  

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((data) => {
      this.allMovies = data;
      this.RandomMovie();
      console.log('stampa un film', this.movieData);
      console.log('stampa tutti film', this.allMovies.results);     
    });

  }

  

  onSubmit(form: NgForm) {
    console.log('Input utente:', this.userInput);
    console.log('Titolo film:', this.movieData.title);

    const title = this.movieData.title;
    if (this.userInput.toLowerCase() === title.toLowerCase()) {
      this.guess = true;
      this.router.navigateByUrl('winner-card');
    } else {
      this.guess = false;
      // confronto negativo
    }
  }

 
}
