import { Component, Input, OnInit } from '@angular/core';
import { Rating } from 'src/app/models/rating';

@Component({
  selector: 'tnv-favorite-item',
  templateUrl: './favorite-item.component.html',
  styleUrls: ['./favorite-item.component.scss']
})
export class FavoriteItemComponent implements OnInit {

  @Input() ratings: Partial<Rating>[] = []; //gets the ratings from parent component

  constructor(){
    this.ratings = []; 
  }


  ngOnInit(): void {
  }

}
