import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'https://api.themoviedb.org/3/movie/550?api_key=f6440e97063436b16714f99cdb7da862';
 
  movies: Movie[] = [   // dati in locale prova
    {
      "adult": false,
      "backdrop_path": "/sRLC052ieEzkQs9dEtPMfFxYkej.jpg",
      "genre_ids": [878],
      "id": 848326,
      "original_language": "en",
      "original_title": "Rebel Moon - Part One: A Child of Fire",
      "overview": "When a peaceful colony on the edge of the galaxy finds itself threatened by the armies of the tyrannical Regent Balisarius, they dispatch Kora, a young woman with a mysterious past, to seek out warriors from neighboring planets to help them take a stand.",
      "popularity": 2998.858,
      "poster_path": "/ui4DrH1cKk2vkHshcUcGt2lKxCm.jpg",
      "release_date": "2023-12-15",
      "title": "Rebel Moon - Part One: A Child of Fire",
      "video": false,
      "vote_average": 6.46,
      "vote_count": 955
    },
    {
      "adult": false,
      "backdrop_path": "/5a4JdoFwll5DRtKMe7JLuGQ9yJm.jpg",
      "genre_ids": [18, 878, 28],
      "id": 695721,
      "original_language": "en",
      "original_title": "The Hunger Games: The Ballad of Songbirds & Snakes",
      "overview": "64 years before he becomes the tyrannical president of Panem, Coriolanus Snow sees a chance for a change in fortunes when he mentors Lucy Gray Baird, the female tribute from District 12.",
      "popularity": 2750.026,
      "poster_path": "/mBaXZ95R2OxueZhvQbcEWy2DqyO.jpg",
      "release_date": "2023-11-15",
      "title": "The Hunger Games: The Ballad of Songbirds & Snakes",
      "video": false,
      "vote_average": 7.246,
      "vote_count": 1295
    },
    {
      "adult": false,
      "backdrop_path": "/jXJxMcVoEuXzym3vFnjqDW4ifo6.jpg",
      "genre_ids": [28, 12, 14],
      "id": 572802,
      "original_language": "en",
      "original_title": "Aquaman and the Lost Kingdom",
      "overview": "Black Manta, still driven by the need to avenge his father's death and wielding the power of the mythic Black Trident, will stop at nothing to take Aquaman down once and for all. To defeat him, Aquaman must turn to his imprisoned brother Orm, the former King of Atlantis, to forge an unlikely alliance in order to save the world from irreversible destruction.",
      "popularity": 1542.493,
      "poster_path": "/8xV47NDrjdZDpkVcCFqkdHa3T0C.jpg",
      "release_date": "2023-12-20",
      "title": "Aquaman and the Lost Kingdom",
      "video": false,
      "vote_average": 6.485,
      "vote_count": 357
    }
  ];

  constructor(private http: HttpClient) { }

  getMovieData(): Observable<Movie> {
    return this.http.get<Movie>(this.apiUrl);
  }
}


