import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { TmdService } from '../../servicesTMD/tmd.service';


@Component({
  selector: 'tnv-review-movie',
  templateUrl: './review-movie.component.html',
  styleUrls: ['./review-movie.component.scss']
})
export class ReviewMovieComponent implements OnInit{
  reviewform: FormGroup;

    title: string;

    val = {

      review: "",
     // rating: number
    };

    

    constructor(tmdService: TmdService){
      this.title = tmdService.movieTitle;
    }

    ngOnInit(): void {
      

      
    }

    sendReview(reviewform: NgForm){
      console.log(reviewform.value)
    }

}
