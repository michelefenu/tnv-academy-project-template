import { Component, Input, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
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

  @ViewChild(MatAccordion) accordion!: MatAccordion;
    
  @Input() movies: Movie[] = [];

  constructor(private apiService: ApiService) {
  }

  getPoster(imgUrl:string | null){
    return this.apiService.getPoster(imgUrl);
  }
}

