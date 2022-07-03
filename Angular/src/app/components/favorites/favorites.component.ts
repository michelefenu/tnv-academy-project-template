import { Component, OnInit } from "@angular/core";
import { Favoriti } from "../../@models/favoriti";
import { Posizione } from "../../@models/classifica";
import { FavoritesService } from "../../@service/favorites.service";

@Component({
  selector: "app-favorites",
  templateUrl: "./favorites.component.html",
  styleUrls: ["./favorites.component.scss"],
})
export class FavoritesComponent implements OnInit {
  favorites: Posizione[] = [];

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit(): void {
    const getObservable = this.favoritesService.getFavoritesByUserId();

    if (getObservable) {
      getObservable.subscribe({
        next: (favoriti: Posizione[]) => {
          this.favorites = favoriti;
        },
        error: (err) => console.error(err),
      });
    }
  }

  
}
