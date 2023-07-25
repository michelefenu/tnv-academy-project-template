import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RatingService } from '../../servicesRating/rating.service';

@Component({
  selector: 'tnv-review-movie',
  templateUrl: './review-movie.component.html',
  styleUrls: ['./review-movie.component.scss']
})
export class ReviewMovieComponent implements OnInit{
  reviewform: FormGroup;

    constructor(private rating: RatingService){}

    ngOnInit(): void {
      this.reviewform = new FormGroup({
        recensione: new FormControl(Validators.required )
      })

      
    }

    onSubmit(): void {
      console.log(this.reviewform);
    }

}
