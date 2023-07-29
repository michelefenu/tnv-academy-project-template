import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TmdService } from 'src/app/@shared/servicesTMD/tmd.service';


@Component({
  selector: 'tnv-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})

export class PlayComponent implements OnInit{

// 
  val = {
    movieTitleAttempt: ""
  };
//
//
  movieId: number;
  idFamousMovies: number[];


  showOverview: boolean = false;
  showReleaseDate: boolean = false;
  showVoteAverage: boolean = false;
  showOriginalLanguage: boolean = false;
  showPopularity: boolean = false;
//

//
  totalElapsedTime = 0;
  isRunning = false;
  timeIncrement = 30;
  cardElapsedTime: number = 0;
  totalTimeEvent = new EventEmitter<number>();

  private intervalId: any;
//

//
clickedBtOne: boolean = false;
clickedBtTwo: boolean = false;
clickedBtThree: boolean = false;
clickedBtFour: boolean = false;
clickedBtFive: boolean = false;
//

//
youWon: boolean = false;
showGame:boolean = false;
  

  constructor(public tmdService: TmdService){
    this.idFamousMovies = [ 550, 346698, 298618, 447365, 667538, 447277, 872585, 502356, 569094, 603692, 385687, 921636, 921636];
    this.movieId = this.idFamousMovies[Math.floor(Math.random() * this.idFamousMovies.length)];


  }

  ngOnInit(): void {
    this.tmdService.getMovie(this.movieId)
    
  }

  //
  startTimer(){
    this.isRunning = true;
    this.showGame = true;
    this.intervalId = setInterval(() => {
      this.totalElapsedTime++;
    }, 1000);
  }

  stopTimer(){
    this.isRunning = false;
    clearInterval(this.intervalId);
    this.totalTimeEvent.emit(this.totalElapsedTime + this.cardElapsedTime);
}

  addTime(){
    this.totalElapsedTime += this.timeIncrement;
  }

  restartTimer(){
    this.totalElapsedTime = 0;
    this.cardElapsedTime = 0;
    this.isRunning = false;
    clearInterval(this.intervalId);
  }
  //

  onClickButtonShowOverview(){
    this.showOverview = true;
    this.addTime()
    this.clickedBtOne = true;
  }

  onClickButtonShowReleaseDate(){
    this.showReleaseDate = true;
    this.addTime()
    this.clickedBtTwo = true;

  }

  onClickButtonShowVoteAverage(){
    this.showVoteAverage = true;
    this.addTime()
    this.clickedBtThree = true;
  }

  onClickButtonShowOriginalLanguage(){
    this.showOriginalLanguage = true;
    this.addTime()
    this.clickedBtFour = true;
  }

  onClickButtonShowPopularity(){
    this.showPopularity = true;
    this.addTime()
    this.clickedBtFive = true;
  }

  
  checkIfMovieCorrect(guessMovieForm: NgForm, movieTitle: string){
    console.log(movieTitle)
    console.log(this.val.movieTitleAttempt)
    if(this.val.movieTitleAttempt === movieTitle){
      console.log("bravo hai vinto")
      this.stopTimer();
      this.youWon = true;
    }

  }
}
















   
   