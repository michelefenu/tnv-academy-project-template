import { Component, OnInit } from '@angular/core';
import { Rating } from '../models/rating';
import { Movie } from '../models/movie';
import { User } from '../models/user';
import { RatingService } from '../@shared/servicesRating/rating.service';
import { TmdService } from '../@shared/servicesTMD/tmd.service';

@Component({
  selector: 'tnv-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit{

  review: Rating;
     reviewsArray: Rating [] = [];
     currentMovie: Movie;
     currentUser: User;
  

  constructor(public ratingService: RatingService, public tmdService: TmdService){
    this.currentUser= JSON.parse(localStorage.getItem("user") || '') as User;
  }

  ngOnInit(): void {
     
    
    console.log(this.reviewsArray);
    this.getReviewsArray();
}


getReviewsArray(){
  this.ratingService.getRatings(this.currentUser.id)
  .subscribe({
    next: (res: Rating[]) => {
      this.reviewsArray = res;
      console.log(this.reviewsArray)
    },
    error: (error: any) => {
      console.log('Errore', error)
    }
  }); 
}


  }
}
 */
}



