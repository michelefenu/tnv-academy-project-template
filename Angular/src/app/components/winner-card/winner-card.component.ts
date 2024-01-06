import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/@core/services/movie.service';
import { TimerService } from 'src/app/@core/services/timer.service';

@Component({
  selector: 'tnv-winner-card',
  templateUrl: './winner-card.component.html',
  styleUrl: './winner-card.component.scss'
})
export class WinnerCardComponent implements OnInit {

  constructor(private router:Router, private movieService:MovieService, private timerService:TimerService){};

  ngOnInit():void{

    this.movieService.getMovieDetailsById


  }


}
