import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/@shared/services/api.service';
import { Actor } from 'src/app/models/actor';
import { ActorCredits, Cast } from 'src/app/models/actorCredits';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'tnv-movie-section',
  templateUrl: './movie-section.component.html',
  styleUrls: ['./movie-section.component.scss']
})
export class MovieSectionComponent  {


  @Input() movies: Movie[] = [];
  


  constructor(private apiService: ApiService) {
  }

  getPoster(imgUrl:string | null){
    return this.apiService.getPoster(imgUrl);
  }
}

