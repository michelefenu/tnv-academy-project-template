import { Component, Input, OnInit, Output } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AuthService } from 'src/app/@core/services/auth.service';
import { ApiService } from 'src/app/@shared/services/api.service';
import { RatingService } from 'src/app/@shared/services/rating.service';
import { Movie } from 'src/app/models/movie';
import { Rating } from 'src/app/models/rating';

@Component({
  selector: 'tnv-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  @Input() foundMovies: Movie[] = []; //send found movies to child component MovieSection
  @Input() foundActorId: string = ''; //send actor Id to MovieSection component

  currentUserId = this.authService.getCurrentUser().id.toString();  //get the current user query

  movies: Movie[] = [];       //receive movies from apiService
  searchData: any = {};       //get data from search form

  movieRating: Rating = { //receive the movie with rating and review to be sent to DB
    userId: '',
    movieId: '',
    posterPath: '',
    movieTitle: '',
    movieOverview: '',
    movieReleaseDate: '',
    review: '',
    rating: 0
  };

  constructor(private authService: AuthService, private apiService: ApiService, private ratingService: RatingService) { }

  ngOnInit(): void {
  }

  findMovies(data: any) {

    let gotMovies: Movie[] = []; //TEST
    this.apiService.getFilteredMovies(data).subscribe({
      next: (movies: Movie[]) => {
        movies.map((response) => gotMovies.push(response));
      },
      error: (error: any) => {
        console.log(error);
        this.movies = [];
      }
    });
    this.foundMovies = gotMovies;
  }

  getRatingToSave(rating: any) {
    this.movieRating = rating;
    this.ratingService.addRating(this.movieRating).subscribe({  //save rating in DB
      next: (response: any) => {
        // this.movieRating = response; //save response in this class
        console.log(`Movie rating saved correctly`);
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }

  //clicking on search save movies
  onSearch(foundMovies: Movie[]) {
    this.foundMovies = foundMovies;
  }

  //set movie poster path using service method (if poster path exist build whole url, otherwise use local image)
  setPosterUrl() {
    for (let movie of this.foundMovies) {
      movie.poster_path = this.apiService.getPoster(movie.poster_path);
    }
  }
}

