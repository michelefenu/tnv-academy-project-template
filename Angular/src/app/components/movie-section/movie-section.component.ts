import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/@shared/services/api.service';
import { Actor } from 'src/app/models/actor';
import { ActorCredits, Cast } from 'src/app/models/actorCredits';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'tnv-movie-section',
  templateUrl: './movie-section.component.html',
  styleUrls: ['./movie-section.component.scss']
})
export class MovieSectionComponent implements OnInit {


  movies: Cast[] | undefined = [];
  actorId: number | undefined = 500;
  actorCredits: Partial<ActorCredits> = {};


  constructor(private apiService: ApiService) {
  }


  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    this.apiService.getActorCredits(this.actorId).subscribe(
      {
        next: (res) => {
          this.actorCredits = res;
          this.movies = this.actorCredits.credits?.cast;
        }
      }
    )
  }

}
