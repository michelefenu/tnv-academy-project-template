import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Movie } from '../@models/movie';

@Component({
  selector: 'tnv-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.scss']
})
export class CommentSectionComponent implements OnInit {

  constructor(
    public http: HttpClient,
    public router: Router,
    private modalService: NgbModal
  ) {}

  movie : Partial<Movie> = {};
  private timerOn: boolean = false;

  ngOnInit(): void {
    this.getRandomMovie();
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

}
