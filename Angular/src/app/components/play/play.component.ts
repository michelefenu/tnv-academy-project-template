import { Component, OnInit, EventEmitter } from '@angular/core';
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


  

  constructor(public tmdService: TmdService){
    this.idFamousMovies = [ 550, 346698, 298618, 447365, 667538, 447277, 872585, 502356, 569094, 603692, 385687, 921636, 921636];
    this.movieId = this.idFamousMovies[Math.floor(Math.random() * this.idFamousMovies.length)];


  }

  ngOnInit(): void {
    this.tmdService.getMovie(this.movieId)
    
  }

  //
  startTimer(){
    this.isRunning= true;
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
    }

  }
}


    
      
    
 






  


  
  







//`https://api.themoviedb.org/3/trending/movie/week?api_key=8401b10a43e9d31af2e82091f450d1f4`




  //https://www.encodedna.com/angular/how-to-show-hide-or-toggle-elements-in-angular-4.htm#:~:text=The%20*ngIf%20directive%20has%20a,hide%20elements%20inside%20the%20container.

  /*
  -fare meglio l'hiding dei bottoni, sono separati
  -far apparire l'immagine, penso basti l'API
  -ogni volta che un bottone viene premuto, deve essere chiamata la funzione aumentaTimer
  -far iniziare una funzione aumenta timer
  -far si che quando si digita il form ci sia un check se corrisponde a movie.title
  -se corrisponde a invio del form, invoca fermaTimer e
            -manda a review component/appare
            -invia come parametri id film, id utente e string recensione
  -se non corrisponde deve angular sound o un messaggio rosso

  */ 















   
   