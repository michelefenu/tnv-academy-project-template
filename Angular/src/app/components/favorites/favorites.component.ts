import { Component, OnInit } from "@angular/core";
import { Favoriti } from "../../@models/favoriti";
import { FavoritesService } from "../../@service/favorites.service";

@Component({
  selector: "app-favorites",
  templateUrl: "./favorites.component.html",
  styleUrls: ["./favorites.component.scss"],
})
export class FavoritesComponent implements OnInit {
  favorites: Favoriti[] = [];

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit(): void {
    const getObservable = this.favoritesService.getFavorites();

    getObservable.subscribe({
      next: (favoriti: Favoriti[]) => {
        this.favorites = favoriti;
      },
      error: (err) => console.error(err),
    });
  }
}
