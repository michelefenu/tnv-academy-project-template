import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/@core/services/movie.service';
import { RatingService } from 'src/app/@core/services/rating.service';
import { TimerService } from 'src/app/@core/services/timer.service';
import { Movie } from 'src/app/models/movie';
import { Rating } from 'src/app/models/rating';

@Component({
  selector: 'tnv-winner-card',
  templateUrl: './winner-card.component.html',
  styleUrl: './winner-card.component.scss'
})
export class WinnerCardComponent implements OnInit {

  movie: Movie | undefined;
  poster: string | undefined;
  imageurl: string = 'https://image.tmdb.org/t/p/w500';
  title!: string;

  secondsElapsed!: number;
  tempoTotale!: number;
  


  chose: boolean = false;
  review!: string;
  ratingValue: number=0;

  constructor(
    private rating:RatingService, 
    private router:Router, 
    private movieService:MovieService, 
    private timerService:TimerService
    ){};

  ngOnInit():void{

   this.movie = this.movieService.getSelectedMovie();
   this.poster = this.imageurl + this.movie.poster_path;
   console.log("poster",this.poster);
   this.title = this.movie.title;

   this.timerService.getTimer().subscribe((x) =>{
    this.secondsElapsed = x;
    console.log("winner1", this.secondsElapsed);
 });

    this.timerService.data$.subscribe(data => {
    this.tempoTotale = data;
    console.log("winner2",this.tempoTotale);
});

  }

  onSubmit(form: NgForm) {
    console.log('Recensione:', this.review);
    console.log('Valore del voto alla submit:', this.ratingValue);

    const newRating: Rating = {
      userId: '346574545', 
      movieId:"3333",
     rating: 4
    };

    
    this.rating.addRating(newRating).subscribe(
      (result) => {
        console.log('Valutazione aggiunta con successo:', result);
      
      },
      (error) => {
        console.error('Errore durante l\'aggiunta della valutazione:', error);
      
      }
    );
  
  }


  onRatingChange(value: number) { //listen voto
    this.ratingValue = value;
   
  }
  
  
  annullaSalvataggio() {
    this.router.navigateByUrl('userAccount'); // se utente non salva il film
  }
    
  scegliSalva() {
   this.chose = true; // se salva
  }

  salvaMovie(){
    //se dati salvaTI con successo
   
  }

}
