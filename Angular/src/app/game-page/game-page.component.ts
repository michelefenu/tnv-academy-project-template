import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MovieServicesService } from '../@core/services/movie-services.service';
import { Movie } from '../@models/movie';


@Component({
  selector: 'tnv-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {
  movie: Partial<Movie> = {};

  public isCollapsedLocandina = true;
  public isCollapsedCategoria = true;
  public isCollapsedRegista = true;
  public isCollapsedAnno = true; 
  public isCollapsedNazione = true;
  public punteggio = 0;
  
  constructor(private http: HttpClient) { 
  }

  ngOnInit(): void {
    this.getRandomMovie();
    
  }
   

  answer(form: NgForm) {
    form.control.markAllAsTouched();
    if (form.valid) {
      this.punteggio = this.time;
      console.log(this.punteggio);
      }
  }

  interval: number | undefined;
  time = 0;
  startTimer() {
    let timer;
    timer = setInterval(() => (this.time = this.time + 1), 1000);
    return timer;
  }
   getRandomMovie() {
    this.startTimer();
    this.time = 0;
    // Per determinare questo valore facciamo eventualmente una query su movies/latest per avere l'id dell'ultimo Film inserito su TMDB
    const latestId = 4000;
    const randomId = Math.round(Math.random() * latestId);
  
    this.http
      .get(
        `https://api.themoviedb.org/3/movie/${randomId}?api_key=3949444e64e7a9355250d3b1b5c59bf1&language=it-it`
      )
      .subscribe({
      
        next: (res: Partial<Movie>) => {
          console.log('ID trovato', randomId);
          if (res.poster_path) {
            this.movie = res;
          } else {
            console.log('Film senza poster');
            this.getRandomMovie();
          }
        },
        error: () => {
          console.log('ID non esistente, retry!', randomId);
          this.getRandomMovie();
        },
      });
  }
}


