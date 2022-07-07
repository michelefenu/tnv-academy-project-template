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

  movie : Partial<Posizione> = {}
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
  

  
  }

  deleteMovie() {
    const id = this.activatedRoute.snapshot.params['movieId'];
    const getObservable = this.favoritesService.deleteMovie(id);


    if (getObservable) {
      if (id) {
        getObservable.subscribe({
          next: () => this.router.navigateByUrl('/'),
        });
    }
    
    }

  

  
}}
