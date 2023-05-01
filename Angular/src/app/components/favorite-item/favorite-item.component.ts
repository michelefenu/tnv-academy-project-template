import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Rating } from 'src/app/models/rating';

@Component({
  selector: 'tnv-favorite-item',
  templateUrl: './favorite-item.component.html',
  styleUrls: ['./favorite-item.component.scss']
})
export class FavoriteItemComponent implements OnInit {

  @Input() ratings: Partial<Rating>[] = []; //gets the ratings from parent component

  @Output() delete = new EventEmitter();    //emit the ratingID to parent MyFavoriteComponent

  constructor(){
    this.ratings = [];                      
  }

  onClick (id: string | undefined){         //on click emit the id to be deleted
    this.delete.emit(id);
  }
  
  ngOnInit(): void {
  }

}
