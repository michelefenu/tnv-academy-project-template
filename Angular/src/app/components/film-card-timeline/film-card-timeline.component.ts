import { Component, Input } from '@angular/core';

@Component({
  selector: 'tnv-film-card-timeline',
  templateUrl: './film-card-timeline.component.html',
  styleUrl: './film-card-timeline.component.scss'
})
export class FilmCardTimelineComponent {
  @Input() movie: any;
}
