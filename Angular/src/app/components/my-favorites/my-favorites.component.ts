import { Component } from '@angular/core';
import { ApiService } from 'src/app/@shared/services/api.service';
import { FavoritesService } from 'src/app/@shared/services/favorites.service';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'tnv-my-favorites',
  templateUrl: './my-favorites.component.html',
  styleUrls: ['./my-favorites.component.scss']
})
export class MyFavoritesComponent {
   
  favorites: Movie[] = [];

  constructor(private apiService: ApiService, private favoritesService: FavoritesService) {}
  
  ngOnInit() {
    this.favorites = this.favoritesService.getFavorites();
  }

  
  getPoster(imgUrl: string | null) {
    return this.apiService.getPoster(imgUrl);
  }

}
