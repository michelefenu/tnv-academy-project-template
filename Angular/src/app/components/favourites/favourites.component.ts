import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/@core/services/auth.service';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss'],
})
export class FavouritesComponent implements OnInit {
  favouriteMovies: any[] = [];

  constructor(private movieService: MovieService, private authService: AuthService) { }

  ngOnInit(): void {
    this.loadFavouriteMovies();
  }

  private loadFavouriteMovies() {
    {
      const userId = this.authService.getCurrentUserId();

      if (userId !== null) {
        this.movieService.getFavouritesByUserId(userId).subscribe(
          (favouriteMoviesResponse) => {
            this.favouriteMovies = favouriteMoviesResponse;
          },
          (error) => {
            console.error('Errore durante il recupero dei preferiti', error);

          }
        );
      } else {
        console.error('ID utente non disponibile.');
      }
    }
  }
}
