import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
 private apiUrl = 'https://api.themoviedb.org/3/movie/550?api_key=f6440e97063436b16714f99cdb7da862';

  constructor(private http: HttpClient) { }

  getMovieData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}



