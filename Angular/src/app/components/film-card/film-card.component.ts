import { Component, Input } from '@angular/core';
import { MovieService } from 'src/app/movie.service';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

/**
 * @title Card with multiple sections
 */

@Component({
  selector: 'tnv-film-card',
  templateUrl: './film-card.component.html',
  styleUrl: './film-card.component.scss',
  standalone: false
})
export class FilmCardComponent {
  @Input() movie: any;

  constructor(private movieService: MovieService){}

}

