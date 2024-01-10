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



    


    ngOnInit(): void {

    
      const user =this.userService.getCurrentUser().id;

      this.ratingService.getRatingByUserId(user).subscribe(
        (rating: Rating[]) => {
          // Aggiungi i dati al tuo array preferiti
          this.rating = rating;
          console.log(this.preferiti);
        },
        error => {
          console.error('Errore nel recupero dei rating:', error);
        }
      );
      
      

    
    }





  preferiti: Preferiti[] = [
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

 

 


}
