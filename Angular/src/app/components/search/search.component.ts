import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

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

  search() {
    const actorName = this.actorName.value;
    this.searchEvent.emit(actorName);
  }
}




