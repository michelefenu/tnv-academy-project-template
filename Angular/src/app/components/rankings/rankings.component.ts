import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/@core/services/auth.service';
import { GiocoTimeService } from 'src/app/@core/services/gioco-time.service';
import { MovieService } from 'src/app/@core/services/movie.service';
import { RatingService } from 'src/app/@core/services/rating.service';
import { ReviewService } from 'src/app/@core/services/review.service';

import { Movie } from 'src/app/models/movie';
import { Preferiti } from 'src/app/models/preferiti';
import { Rating } from 'src/app/models/rating';
import { Review } from 'src/app/models/review';
import { TimeGame } from 'src/app/models/time';


@Component({
  selector: 'tnv-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.scss']
  
})
export class RankingsComponent implements OnInit {

  constructor(
    private movieService: MovieService,
    private ratingService: RatingService, 
    private tempoGioco: GiocoTimeService, 
    private userService: AuthService,
    private reviewService: ReviewService) {}

    userRatings!: Rating ;
    userReview!: Review;
    userGuess!: TimeGame;
    user!:any;


    preferiti: Preferiti[] = [];
    
 ngOnInit(): void {

       //recupero id user
       this.user =this.userService.getCurrentUser().id;

          //recupero dati tabella rating      
        this.ratingService.getRatingByUserId(this.user).subscribe(
        (ratings) => {
          this.userRatings = ratings;
          console.log('Valutazioni dell\'utente:', this.userRatings);
        },
        (error) => {
          console.error('Errore nel recupero delle valutazioni:', error);
        }
      );
          //recupero dati tabella review
        this.reviewService.getReviewByUserId("2").subscribe(
        (review) => {
          this.userReview = review;
          console.log('Recensioni  dell\'utente:', this.userReview);
        },
        (error) => {
          console.error('Errore nel recupero delle recensioni:', error);
        }
      );
            //recupero dati tabella timer
      this.tempoGioco.getTimerByUserId("2").subscribe(
        (guess) => {
          this.userGuess = guess;
          console.log('tempo gioco  dell\'utente:', this.userGuess);
        },
        (error) => {
          console.error('Errore nel recupero del tempo gioco:', error);
        }
      );
         
      //prova inserimento  ciclare??
      const preferito: Preferiti = {
        titoloFilm: "star wars",
        review: "che la forza sia con te",
        votoFilm: 3,
        tempoGuess: 34,
        locandina: '' 
      };

      this.preferiti.push(preferito);

      console.log("preferito" ,this.preferiti);

     /* preferiti: Preferiti[] = [
        {
          titoloFilm: 'Titolo Film 1',
          votoFilm: 4.5,
          review: 'Una breve recensione del film 1',
          tempoGuess: 120,
          locandina: 'path/locandina1.jpg'
        },
        {
          titoloFilm: 'Titolo Film 2',
          votoFilm: 3.8,
          review: 'Una breve recensione del film 2',
          tempoGuess: 90,
          locandina: 'path/locandina2.jpg'
        },
        {
          titoloFilm: 'Titolo Film 3',
          votoFilm: 4.2,
          review: 'Una breve recensione del film 3',
          tempoGuess: 105,
          locandina: 'path/locandina3.jpg'
        }
      ] 
      */
    
     
    
     
    
    
    }
  }