import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/@shared/services/api.service';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'tnv-movie-cards',
  templateUrl: './movie-cards.component.html',
  styleUrls: ['./movie-cards.component.scss']
})
export class MovieCardsComponent implements OnInit {

  
  movieId: number | null = 550;
  movie: Partial<Movie> = {};
  imgUrl: string = "";

  constructor(private apiService:ApiService){
  }


  ngOnInit(): void {
       
  }


}
