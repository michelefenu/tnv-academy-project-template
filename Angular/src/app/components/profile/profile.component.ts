import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/@core/services/auth.service';
import { Posizione } from 'src/app/@models/classifica';
import { User } from 'src/app/@models/user';
import { FavoritesService } from 'src/app/@service/favorites.service';

@Component({
  selector: 'tnv-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  currentUser: Partial<User> = {};
  favorites: Posizione[] = [];

  constructor(private authService: AuthService, private favoritesService: FavoritesService) { }

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
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
