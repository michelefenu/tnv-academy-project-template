import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/@core/services/movie.service';
import { TimerService } from 'src/app/@core/services/timer.service';
import { Movie } from 'src/app/models/movie';

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
  


  chose: boolean = false;
  review!: string;
  ratingValue: number=0;

  constructor(private router:Router, private movieService:MovieService, private timerService:TimerService){};

  ngOnInit():void{

   this.movie = this.movieService.getSelectedMovie();
   this.poster = this.imageurl + this.movie.poster_path;
   console.log("poster",this.poster);
   this.title = this.movie.title;

  }

  onSubmit(form: NgForm) {
    console.log('Recensione:', this.review);
    console.log('Valore del voto alla submit:', this.ratingValue);
  }

  onRatingChange(value: number) {
    this.ratingValue = value;
   
  }
  
  
  annullaSalvataggio() {
    this.router.navigateByUrl('userAccount');
  }
    
  salvaMovie() {
   this.chose = true;
  }

}
