import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatExpansionModule} from '@angular/material/expansion';

/**
 * @title Input with hints
 */

@Component({
  selector: 'tnv-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
  standalone: false
  
})

export class SearchComponent {
  @Output() searchEvent = new EventEmitter<string>();
  @ViewChild('actorName') actorName: any;
  @Output() searchByTitleEvent = new EventEmitter<string>();

  search(actorName: string) {
    //const searchTerm = this.actorName.nativeElement.value;
    this.searchEvent.emit(actorName);
  }

  searchByTitle(title: string){
    this.searchByTitleEvent.emit(title);
  }
}



