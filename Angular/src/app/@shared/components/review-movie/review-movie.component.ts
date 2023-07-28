import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
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
      review: ""
    };

    constructor(tmdService: TmdService){
      this.title = tmdService.movieTitle;
    }

    ngOnInit(): void {
      

      
    }

    onSubmit(): void {
      
    }

}
