import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TmdService } from 'src/app/@shared/servicesTMD/tmd.service';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'tnv-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit{

  private Movie: any;
  
  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.http.get(``)
    
  }
}
/*
export class PlayComponent implements OnInit{
  movie: any;
  constructor(private tmd: TmdService){}

  ngOnInit(): void {
    this.tmd.getmovies(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f24d9a0d0bda27218d6ecc0b4a1384dan"
      ).subscribe((data: any) =>{
        this.movie = Object.keys(data).map((key)=> { 
          console.log(key)
          return data[key]
        })
        
      })
  }
}
*/