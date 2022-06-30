import { Component, OnInit } from '@angular/core';
import { Favoriti } from '../../@models/favoriti';
import { FavoritesService } from '../../@service/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  filterText: string = '';

  favorites: Favoriti[] = [];
  filteredFavorites: Favoriti[] = [];
  categories: string[] = [];
  filteredfavorites: any;

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit(): void {
    const getMenuObservable = this.favoritesService.getFavorites();

    getMenuObservable.subscribe({
      next: (favoriti: Favoriti[]) => {
       console.log (favoriti)
      },
    });
  }

  getSectionData(category: string) {
    return this.filteredfavorites.filter((x: { category: string; }) => x.category === category);
  }



}