import { HttpClient } from "@angular/common/http";
import { Component, Input, OnChanges, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { MovieServicesService } from "../@core/services/movie-services.service";
import { Movie } from "../@models/movie";
import { User } from "../@models/user";
import { CommentResponse } from "../@models/comment";
import { RankingsService } from "../@service/rankings.service";
import { FavoritesService } from "../@service/favorites.service";
import { AuthService } from "../@core/services/auth.service";

@Component({
  selector: "tnv-game-page",
  templateUrl: "./game-page.component.html",
  styleUrls: ["./game-page.component.scss"],
})
export class GamePageComponent implements OnInit {
  movie: Partial<Movie> = {};

  closeResult = "";
  public isCollapsedLocandina: boolean = true;
  public isCollapsedDurata: boolean = true;
  public isCollapsedOverview: boolean = true;
  public isCollapsedAnno: boolean = true;
  public isCollapsedRevenue: boolean = true;
  public punteggio = 0;
  public timerOn: boolean = false;
  public answerRight: boolean = true;
  currentRate = 0;
  currentComment = "";
  user: Partial<User> = {};
  moviePoster: string = "";

  @ViewChild("titleForm") titleForm: NgForm | undefined;
  @ViewChild("commentForm") commentForm: NgForm | undefined;

  constructor(
    public http: HttpClient,
    public router: Router,
    public modalService: NgbModal,
    public rankingService: RankingsService,
    public favoritesService: FavoritesService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.user = this.authService.getCurrentUser();
  }

  setAnswerRight(valore: boolean) {
    this.answerRight = valore;
  }
  changeComment(target: any) {
    this.currentComment = target.value;
  }

  answer(form: NgForm, content: any) {
    form.control.markAllAsTouched();
    if (form.valid) {
      this.punteggio = this.time;
      this.answerRight =
        form.form.value.titolo.toUpperCase() ===
        this.movie.title?.toUpperCase();
      if (this.answerRight) {
        this.open(content);
        this.timerOn = false;
        clearInterval(this.currentInterval);
      }
    }
  }

  interval: number | undefined;
  time = 0;
  startTimer() {
    this.timerOn = !this.timerOn;
    let timer;
    timer = setInterval(() => (this.time = this.time + 1), 1000);
    return timer;
  }
  currentInterval: any = null;

  getRandomMovie() {
    this.titleForm?.reset();
    this.commentForm?.reset();

    if (!this.timerOn) {
      this.currentInterval = this.startTimer();
    }

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
          console.log("ID trovato", randomId);
          if (res.poster_path) {
            this.movie = res;
            this.moviePoster = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${this.movie.poster_path}`;
          } else {
            console.log("Film senza poster");
            this.getRandomMovie();
          }
        },
        error: () => {
          console.log("ID non esistente, retry!", randomId);
          this.getRandomMovie();
        },
      });
  }

  penalty(collapsed: boolean) {
    if (collapsed) {
    } else {
      this.time += 30;
      if (collapsed === this.isCollapsedLocandina) {
        this.time += 30;
      }
    }
  }
  open(content: any) {
    if (this.answerRight) {
      this.modalService
        .open(content, { ariaLabelledBy: "modal-basic-title" })
        .result.then(
          (result) => {
            this.closeResult = `Closed with: ${result}`;
          },
          (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          }
        );
    }
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }

  onSubmit(form: NgForm, playAgain: boolean) {
    if (form.valid) {
      form.value["movieId"] = this.movie.id;
      form.value[
        "moviePoster"
      ] = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${this.movie.poster_path}`;
      form.value["movieRevenue"] = this.movie.revenue;
      form.value["movieTitle"] = this.movie.title;
      form.value["movieRelease"] = this.movie.release_date;
      form.value["movieOverview"] = this.movie.overview;
      form.value["movieDurata"] = this.movie.runtime;
      form.value["timeSpend"] = this.punteggio * 1000; // secondi convertiti a millisecondi

      const user = this.authService.getCurrentUser();
      form.value["username"] = user.username;
      form.value["userId"] = user.id;

      // se salvi preferito
      if (!playAgain) {
        // recupero voto utente
        form.value["rating"] = this.currentRate;

        // salvo commento dotnet
        const obsCreateCommment = this.favoritesService.createComment(
          this.movie.id || 0,
          this.currentComment
        );

        if (obsCreateCommment) {
          obsCreateCommment.subscribe({
            next: (res) => {
              // recupero id record commento dotnet e lo aggiungo a node
              form.value["commentId"] = res.id;
              // salvo su node tutte le info classifica
              this.salvaClassifica(form, playAgain);
            },
            error: (err) => {
              console.error(err);
            },
          });
        }
      } else {
        // gioca ancora
        // salvo su node tutte le info classifica
        this.salvaClassifica(form, playAgain);
        this.Uncollapse();
      }
    }
  }

  salvaClassifica(form: NgForm, playAgain: boolean) {
    const obsCreateClassifica = this.rankingService.addRating(form.value);
    obsCreateClassifica.subscribe({
      next: (res) => {
        if (playAgain) {
          this.getRandomMovie();
        }
        this.modalService.dismissAll();
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  Uncollapse(){

      this.isCollapsedLocandina = true;
      this.isCollapsedDurata = true;
      this.isCollapsedOverview = true;
      this.isCollapsedAnno = true;
      this.isCollapsedRevenue = true;

  }
}
