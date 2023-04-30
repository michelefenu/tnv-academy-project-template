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

  @Input() foundMovies: any[] = []; //send found movies to child component MovieSection
  @Input() foundActorId: string = ''; //TEST

  currentUserId = this.authService.getCurrentUser().id.toString();  //get the current user query (OK)s
  
  actorToFind: string = ''; //receive name/surname of an actor to find in TMDB
  searchString: string = ''; //receive the search string to be sent to apiService for getting movies
  movies: Movie[] = []; //receive movies from apiService

  verifyRating: any;

  movieRating: Rating = { //receive the movie with rating to be sent to DB
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
    console.log('WELCOME COMPONENT', this.movieRating); //TEST
  }

  searchActorId(actorNameSurname: string) {
    const splitActorName = actorNameSurname.replace(/' '/g, '+');
    console.log(`${actorNameSurname} becomes ${splitActorName}`); //TEST
    this.apiService.getActorIdByNameSurname(splitActorName).subscribe((response: string) => {
      this.foundActorId = response;
      console.log('WELCOMECOMP ACTOR ', this.foundActorId); //TEST OK gets the value (slow)
    });
  }

  getQueryString(query: any){
    this.searchString =query;
    console.log('new query:', this.searchString); //TEST OK
    //get the movies from apiService
    this.apiService.getFilteredMovies(this.searchString).subscribe({
      next: (response: any) => {
        this.foundMovies = response.results; // save group of movies in foundMovies
        this.setPosterUrl(); //set the whole url address of every poster
        console.log('Found movies', this.foundMovies); //TEST OK
      },
      error: (error: any) => {
        console.log(error);
        this.movies = [];
      }
    });
  }

  getRatingToSave(rating: any){ 
    this.movieRating = rating;
    //check if movie already exist in my favorites
    const verifyRating = this.ratingService.getRatingByMovieId(rating.movieId);
    //TODO: insert control if rating for that movieId already exist
    this.ratingService.addRating(this.movieRating).subscribe({  //save rating in DB
      next: (response: any) => {
        // this.movieRating = response; //save response in this class
        console.log(`Movie rating saved correctly`);
        console.log(this.movieRating);
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }

  onSearch(foundMovies: Movie[]) {
    this.foundMovies = foundMovies;
    console.log("WELCOMECOMP", this.foundMovies)
   }

   setPosterUrl(){
    for (let movie of this.foundMovies){
      movie.poster_path = this.apiService.getPoster(movie.poster_path);
      console.log(movie.posterPath); //TEST LINK POSTER OK
    }
   }

}

