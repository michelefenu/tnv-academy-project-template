import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Posizione } from '../@models/classifica';
import { Movie } from '../@models/movie';
import { FavoritesService } from '../@service/favorites.service';

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
    private activatedRoute : ActivatedRoute,
    private favoritesService : FavoritesService,
  ) {}

  movie : Partial<Movie> = {}
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['movieId'];
    const getObservable = this.favoritesService.getMovieById(id);

    if(getObservable){
      getObservable.subscribe({
      next: (favoriti: Posizione) => {
        this.movie = favoriti;
      },
      error: (err) => console.error(err),
    });
  }
  

  /*deletePiatto(id: number | undefined) {
    if (id) {
      this.favoritesService.deleteMovie(id).subscribe({
        next: () => this.router.navigateByUrl('/'),
      });
    }
  }*/
  }

  deleteMovie(){
    const id = this.activatedRoute.snapshot.params['movieId'];
    this.favoritesService.deleteMovie(id);
  }
}
  

