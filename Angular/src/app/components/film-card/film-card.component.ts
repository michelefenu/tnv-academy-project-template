import { Component, Input } from '@angular/core';
import { MovieService } from 'src/app/movie.service';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatSnackBar } from '@angular/material/snack-bar';
import { privateDecrypt } from 'crypto';

@Component({
  selector: 'tnv-film-card',
  templateUrl: './film-card.component.html',
  styleUrl: './film-card.component.scss',
  standalone: false
})
export class FilmCardComponent {
  @Input() movie: any;

  constructor(
    private movieService: MovieService,
    private snackBar: MatSnackBar
    ) {}

  addFavourites(){
    console.log("chiamata addFavourites nel film-card component");
    if (!this.movie || !this.movie.id){
      return;
    }
    console.log("movieId è ", this.movie.id);
    this.movieService.addToFavourites(this.movie.id).subscribe(
      (Response) => {
        console.log('Film aggiunto ai preferiti!', Response);
        this.snackBar.open('Film aggiunto ai preferiti!', 'OK', {
          duration: 3000,
        });
      },
      (error) => {
        console.error('Errore durante l\'aggiunta ai preferiti', error);
        this.snackBar.open('Errore 1 durante l\'aggiunta ai preferiti', 'OK', {
          duration: 3000,
        });
      }
    );
  }

}

