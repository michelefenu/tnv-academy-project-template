import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Posizione } from '../@models/classifica';
import { Favoriti } from '../@models/favoriti';
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
 
  movie : Partial<Posizione> = {};

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['movieId'];

    this.favoritesService.getMovieById(id).subscribe({
      next: (response) => (this.movie = response),
      error: (err) => console.log('Film non trovato!'),
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


  

