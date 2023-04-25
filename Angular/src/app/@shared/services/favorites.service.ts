import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  favorites: any[] = [];

  constructor() { }

  addFavorite(movie: any) {
    this.favorites.push(movie);
  }
  
  getFavorites() {
    return this.favorites;
  }
}
