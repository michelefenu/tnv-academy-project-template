import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CountdownModule } from 'ngx-countdown';
import { MovieService } from 'src/app/@shared/services/movie.service';

@Component({
  selector: 'tnv-gameroom',
  templateUrl: './gameroom.component.html',
  styleUrl: './gameroom.component.scss'
})
export class GameroomComponent implements OnInit{
  movieData: any;
  genres!: string;
  release!: string;
  description!: string;
  production!: string;
  poster!: string;
  imageurl: string = 'https://image.tmdb.org/t/p/w500';

  userInput!: string;

  guess!:boolean;

  
  constructor(private movie:MovieService){ }

  ngOnInit(): void {
    this.movie.getMovieData().subscribe((data) => {
      this.movieData = data;
      this.genres = this.movieData.genres[0].name;
      this.release = this.movieData.release_date;
      this.description = this.movieData.overview;
      this.production = this.movieData.production_companies[2].name;
      this.poster = this.imageurl + this.movieData.poster_path;
    });
  }

  onSubmit(form: NgForm) {
    console.log(this.userInput);
    console.log(this.movieData.title);

    const title = this.movieData.title;
    if (this.userInput.toLowerCase() === title.toLowerCase()) {
      this.guess = true;
      // Esegui azioni basate sul confronto positivo
    } else {
      this.guess = false;
      // Esegui azioni basate sul confronto negativo
    }



  }
  
}
