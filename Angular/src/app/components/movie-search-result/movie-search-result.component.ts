import { Component, Input } from '@angular/core';

@Component({
  selector: 'tnv-movie-search-result',
  templateUrl: './movie-search-result.component.html',
  styleUrl: './movie-search-result.component.scss'
})
export class MovieSearchResultComponent {
  @Input() moviesResult: any[] = [];

}
