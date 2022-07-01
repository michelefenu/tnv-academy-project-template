import { HttpClient } from "@angular/common/http";
import { Component, Input, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { MovieServicesService } from "../@core/services/movie-services.service";
import { Movie } from "../@models/movie";
import { User } from "../@models/user";

@Component({
  selector: "tnv-game-page",
  templateUrl: "./game-page.component.html",
  styleUrls: ["./game-page.component.scss"],
})
export class GamePageComponent implements OnInit {
  movie: Partial<Movie> = {};
  user: Partial<User> = {};

  closeResult = "";
  public isCollapsedLocandina: boolean = true;
  public isCollapsedDurata: boolean = true;
  public isCollapsedOverview: boolean = true;
  public isCollapsedAnno: boolean = true;
  public isCollapsedRevenue: boolean = true;
  public punteggio = 0;
  private timerOn: boolean = false;
  private answerRight: boolean = false;

  constructor(
    public http: HttpClient,
    public router: Router,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.getRandomMovie();
  }

  answer(form: NgForm, content: any) {
    form.control.markAllAsTouched();
    if (form.valid) {
      this.punteggio = this.time;
      this.answerRight = form.form.value.titolo === this.movie.title;
      if (this.answerRight) {
        this.open(content);
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
  getRandomMovie() {
    if (!this.timerOn) {
      this.startTimer();
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
}
