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
    if (!this.movie || !this.movie.id){
      return;
    }

    this.movieService.addFavourites(this.movie.id).subscribe(
      (Response) => {
        console.log('Film aggiunto ai preferiti!', response);
        this.snackBar.open('Film aggiunto ai preferiti!', 'OK', {
          duration: 3000,
        });
      },
      (error) => {
        console.error('Errore durante l\'aggiunta ai preferiti', error);
        this.snackBar.open('Errore durante l\'aggiunta ai preferiti', 'OK', {
          duration: 3000,
        });
      }
    );
  }

}

