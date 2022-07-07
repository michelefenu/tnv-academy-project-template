import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Posizione } from '../@models/classifica';
import { Movie } from '../@models/movie';
import { FavoritesService } from '../@service/favorites.service';
import { RankingsService } from '../@service/rankings.service';

@Component({
  selector: 'tnv-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.scss']
})
export class CommentSectionComponent implements OnInit {

  constructor(
    public http: HttpClient,
    public router: Router,
    private modalService: NgbModal,
    private favoritesService: FavoritesService,
    private activatedRoute: ActivatedRoute,
  ) {}

  movie : Partial<Movie> = {
    "adult": false,
    "backdrop_path": "/g6R1OT7ETBLGLeUJOE0pOiAFHcI.jpg",
    "belongs_to_collection": null,
    "budget": 1200000,
    "genres": [
        {
            "id": 80,
            "name": "Crime"
        },
        {
            "id": 53,
            "name": "Thriller"
        }
    ],
    "homepage": "",
    "id": 500,
    "imdb_id": "tt0105236",
    "original_language": "en",
    "original_title": "Reservoir Dogs",
    "overview": "A botched robbery indicates a police informant, and the pressure mounts in the aftermath at a warehouse. Crime begets violence as the survivors -- veteran Mr. White, newcomer Mr. Orange, psychopathic parolee Mr. Blonde, bickering weasel Mr. Pink and Nice Guy Eddie -- unravel.",
    "popularity": 31.936,
    "poster_path": "/AjTtJNumZyUDz33VtMlF1K8JPsE.jpg",
    "production_companies": [
        {
            "id": 285,
            "logo_path": null,
            "name": "Live Entertainment",
            "origin_country": ""
        },
        {
            "id": 26198,
            "logo_path": null,
            "name": "Dog Eat Dog Productions",
            "origin_country": ""
        }
    ],
    "production_countries": [
        {
            "iso_3166_1": "US",
            "name": "United States of America"
        }
    ],
    "release_date": "1992-09-02",
    "revenue": 2859750,
    "runtime": 99,
    "spoken_languages": [
        {
            "english_name": "English",
            "iso_639_1": "en",
            "name": "English"
        }
    ],
    "status": "Released",
    "tagline": "Every dog has his day.",
    "title": "Reservoir Dogs",
    "video": false,
    "vote_average": 8.1,
    "vote_count": 12001
};

  ngOnInit(): void {
    /*const id = this.activatedRoute.snapshot.params['movieId'];

      this.favoritesService.getMovieByMovieId(id).subscribe({
      next: (response : Partial <Posizione>) => (this.movie = response),
      error: (err) => console.log('Film non trovato!'),
    });*
  }
  

  
  }

  deleteMovie(){
    const id = this.activatedRoute.snapshot.params['movieId'];
    this.favoritesService.deleteMovie(id);
    
*/
  }

  
}
