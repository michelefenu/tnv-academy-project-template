import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Posizione } from "../@models/classifica";
import { Movie } from "../@models/movie";
import { FavoritesService } from "../@service/favorites.service";

@Component({
  selector: "tnv-comment-section",
  templateUrl: "./comment-section.component.html",
  styleUrls: ["./comment-section.component.scss"],
})
export class CommentSectionComponent implements OnInit {
  constructor(
    public http: HttpClient,
    public router: Router,
    private modalService: NgbModal,
    private activatedRoute: ActivatedRoute,
    private favoritesService: FavoritesService
  ) {}

  commentUser: string = "";

  movie: Partial<Posizione> = {};
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params["movieId"];
    const getObservable = this.favoritesService.getMovieById(id);

    if (getObservable) {
      getObservable.subscribe({
        next: (favoriti: Posizione) => {
          this.movie = favoriti;

          this.favoritesService
            .getComment(this.movie.commentId || 0)
            .subscribe({
              next: (resp) => {
                this.commentUser = resp.userComment;
              },
              error: (err) => {
                console.error(err);
              },
            });
        },
        error: (err) => console.error(err),
      });
    }
  }

  deleteMovie() {
    debugger;
    const idClassifica = this.activatedRoute.snapshot.params["movieId"];
    const getObservable = this.favoritesService.deleteMovie(idClassifica);
    const getObservableDotNet = this.favoritesService.deleteMovieComment(
      this.movie.commentId || 0
    );
    debugger;
    getObservable?.subscribe({
      next: (err) => {
        debugger;
        console.log("preferito e posizione in classifica rimosso da node");
        getObservableDotNet.subscribe({
          next: () => {
            debugger;
            console.log("commento rimosso da dotnet");
            this.router.navigateByUrl("/favorites");
          },
          error: (err) => {
            console.error(err);
          },
        });
      },
      error: (err) => console.error(err),
    });
  }
}
