import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-film-card-favourite',
  templateUrl: './film-card-favourite.component.html',
  styleUrls: ['./film-card-favourite.component.scss'],
})
export class FilmCardFavouriteComponent {
  @Input() movie: any;

  constructor() {}
}