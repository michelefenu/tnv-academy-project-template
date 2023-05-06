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

  currentUserId = this.authService.getCurrentUser().id.toString();  //get the current user query (OK)s
  
  // actorToFind: string = '';   //receive nam+surname of an actor to find in TMDB
  // searchString: string = '';  //receive the url string to be sent to apiService for getting movies
  movies: Movie[] = [];       //receive movies from apiService
  searchData: any = {};       //TESTING

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

  // searchActorId(actorNameSurname: string) {
  //   const splitActorName = actorNameSurname.replace(/' '/g, '+');     //replace space char with + symbol compatible with url Api request
  //   console.log(`${actorNameSurname} becomes ${splitActorName}`);     //TEST of replacement
  //   //call method to get the actor ID using the previous string
  //   this.apiService.getActorIdByNameSurname(splitActorName).subscribe((response: string) => {
  //     this.foundActorId = response;
  //     console.log('WELCOME COMP ACTOR ', this.foundActorId); //TEST OK gets the value (slow)
  //   });
  // }

  //method to get all the movies filtered with selected parameters filled by user in Search Component
  // getQueryString(query: any){ 
  //   this.searchString = query;
  //   console.log('new query:', this.searchString);                   //TEST ok
  //   //get the movies from apiService
  //   this.apiService.getFilteredMovies(this.searchString).subscribe({
  //     next: (response: any) => {
  //       this.foundMovies = response.results;                        //save group of movies in foundMovies
  //       this.setPosterUrl();                                        //set the whole url address of every poster
  //       console.log('Found movies', this.foundMovies);              //TEST OK
  //     },
  //     error: (error: any) => {
  //       console.log(error);
  //       this.movies = [];
  //     }
  //   });
  // }

  // getQueryData(data: any){
  //   this.searchData = data;
  //   console.log('WELCOME COMP DATA TO FIND ', this.searchData);
  //   this.apiService.getFilteredMovies(this.searchData).subscribe({
  //         next: (response: any) => {
  //           this.foundMovies = response.results;                        //save group of movies in foundMovies
  //           this.setPosterUrl();                                        //set the whole url address of every poster
  //           console.log('Found movies', this.foundMovies);              //TEST OK
  //         },
  //         error: (error: any) => {
  //           console.log(error);
  //           this.movies = [];
  //         }
  //       });
  //       console.log(this.foundMovies);
  // }

  findMovies(data: any) {
    // this.searchData = data;
    // if (this.searchData.actor !== '' && this.searchData.actor){
    //   this.apiService.getActorIdByNameSurname(this.searchData.actor).subscribe((response: string) => {
    //     this.searchData.actor = response;
    //   });
    // } else {
    //   this.searchData.actor = '';
    // }
    let gotMovies: Movie[] = []; //TEST
    this.apiService.getFilteredMovies(data).subscribe({
      next: (movies: Movie[]) => {
      console.log('WELCOME COMP. GOT MOVIES', gotMovies);
      movies.map((response) => gotMovies.push(response));
      },
      error: (error: any) => {
        console.log(error);
        this.movies = [];
      }
    });
    this.foundMovies = gotMovies;
  }

  getRatingToSave(rating: any){ 
    this.movieRating = rating;
    //check if movie already exist in my favorites
    // const verifyRating = this.ratingService.getRatingByMovieId(rating.movieId);
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

  //clicking on search save movies
  onSearch(foundMovies: Movie[]) {
    this.foundMovies = foundMovies;
    console.log("WELCOME COMP:", this.foundMovies) //TEST ok sono loro
   }

   //set movie poster path using service method (if poster path exist build whole url, otherwise use local image)
   setPosterUrl(){
    for (let movie of this.foundMovies){
      movie.poster_path = this.apiService.getPoster(movie.poster_path);
    }
   }
}

