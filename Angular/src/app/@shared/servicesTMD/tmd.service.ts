import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TmdService {

  constructor(private http: HttpClient ) { }

  API_TMD = "https://api.themoviedb.org/3/trending/movie/week?api_key=8401b10a43e9d31af2e82091f450d1f4";


  /*se volessimo inserire un film*/
  
    getmovies(url: string){
      return this.http.get(this.API_TMD)
    }

}
