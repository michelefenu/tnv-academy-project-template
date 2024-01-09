import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/@core/services/auth.service";
import { GiocoTimeService } from "src/app/@core/services/gioco-time.service";
import { MovieService } from "src/app/@core/services/movie.service";
import { RatingService } from "src/app/@core/services/rating.service";
import { ReviewService } from "src/app/@core/services/review.service";
import { TimerService } from "src/app/@core/services/timer.service";
import { Movie } from "src/app/models/movie";
import { Rating } from "src/app/models/rating";
import { Review } from "src/app/models/review";
import { TimeGame } from "src/app/models/time";

@Component({
  selector: "tnv-winner-card",
  templateUrl: "./winner-card.component.html",
  styleUrl: "./winner-card.component.scss",
})
export class WinnerCardComponent implements OnInit {
  movie: Movie | undefined;
  poster: string | undefined;
  imageurl: string = "https://image.tmdb.org/t/p/w500";
  title!: string;

  secondsElapsed!: number;
  tempoTotale!: number;
  movieid!: number;

  chose: boolean = false;
  review!: string;
  ratingValue: number = 0;

  constructor(
    private ratingService: RatingService,
    private router: Router,
    private movieService: MovieService,
    private timerService: TimerService,
    private reviewService: ReviewService,
    private userService: AuthService,
    private tempoGioco: GiocoTimeService
  ) {}

  ngOnInit(): void {
    this.movie = this.movieService.getSelectedMovie();
    this.poster = this.imageurl + this.movie.poster_path;
    console.log("poster", this.poster);
    this.title = this.movie.title;

    this.timerService.getTimer().subscribe((x) => {
      this.secondsElapsed = x;
      console.log("winner1", this.secondsElapsed);
    });

    this.timerService.data$.subscribe((data) => {
      this.tempoTotale = data;
      console.log("winner2", this.tempoTotale);
    });


    
  }

  onSubmit(form: NgForm) {
    console.log("Recensione:", this.review);
    console.log("Valore del voto alla submit:", this.ratingValue);

    const newRating: Rating = {
      userId: this.userService.getCurrentUser().id,
      movieId: this.movie?.id,
      movieTitle: this.movie?.title,
      rating: this.ratingValue,
    };

    const newReview: Review ={
      userId: this.userService.getCurrentUser().id,
      movieId: this.movie?.id,
      text:this.review
    }

    const newTimer: TimeGame= {
      userId: this.userService.getCurrentUser().id,
      movieId: this.movie?.id,
      movieTitle: this.movie?.title,
      timer: this.tempoTotale,
      id: undefined
    }

    this.ratingService.addRating(newRating).subscribe(
      (result) => {
        console.log("Valutazione aggiunta con successo:", result);
      },
      (error) => {
        console.error("Errore durante l'aggiunta della valutazione:", error);
      }
    );
    this.reviewService.addReview(newReview).subscribe(
      (result) => {
        console.log("Valutazione aggiunta con successo:", result);
      },
      (error) => {
        console.error("Errore durante l'aggiunta della valutazione:", error);
      }
    );

    this.tempoGioco.createTimer(newTimer).subscribe(
      (result) => {
        console.log("Valutazione aggiunta con successo:", result);
      },
      (error) => {
        console.error("Errore durante l'aggiunta della valutazione:", error);
      }
    );

  }

  onRatingChange(value: number) {
    //listen voto
    this.ratingValue = value;
  }

  annullaSalvataggio() {
    this.router.navigateByUrl("userAccount"); // se utente non salva il film
  }

  scegliSalva() {
    this.chose = true; // se salva
  }

  salvaMovie() {
    //se dati salvaTI con successo
  }
}
