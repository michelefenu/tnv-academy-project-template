import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/@core/services/auth.service';
import { ApiService } from 'src/app/@shared/services/api.service';
import { RatingService } from 'src/app/@shared/services/rating.service';
import { Movie } from 'src/app/models/movie';
import { Rating } from 'src/app/models/rating';

@Component({
  selector: 'tnv-my-favorites',
  templateUrl: './my-favorites.component.html',
  styleUrls: ['./my-favorites.component.scss']
})
export class MyFavoritesComponent {
   
  ratings: Rating[] = [];  //collects all ratings and related movie data
  

  constructor(private authService: AuthService, private ratingService: RatingService) {
    this.ratings = [];
  }
 
  ngOnInit() {
    //first: we get the userId of the current user
    const userId = this.authService.getCurrentUser().id.toString();
    console.log("userID:", userId)
    this.getAllRatings(userId.toString()); //get all ratings of current user
    }

  getAllRatings(userId: string) {     //call service method for data
    this.ratingService.getRatingsByUserId(userId).subscribe((ratings: Rating[]) => {
      this.ratings = ratings;
    });

  }

  onDelete(id: string) {      //clicking on delete use id for the following actions 
    console.log(id);
    this.ratings = this.ratings.filter(rating => rating.id !== id); //filter remaining rating withouth that id
    this.ratingService.deleteRating(id).subscribe();                //delete that rating in service
  }
}