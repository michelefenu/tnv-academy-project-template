import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';

/**
 * @title Input with hints
 */

@Component({
  selector: 'tnv-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
  standalone: false
  
})

/* export class SearchComponent {
  @Output() searchEvent = new EventEmitter<string>();
  @ViewChild('actorName') actorName: any;

  search() {
    const actorName = this.actorName.nativeElement.value;
    
    this.searchEvent.emit(actorName);
  }
}

export class RadioOverviewExample {} */

export class SearchComponent {
  @Output() searchEvent = new EventEmitter<{ type: string, searchTerm: string}>();
  @ViewChild('actorName') actorName: any;
  searchType: string = '1';

  search() {
    const searchTerm = this.actorName.nativeElement.value;
    
    this.searchEvent.emit({type: this.searchType, searchTerm});
  }
}

export class RadioOverviewExample {}


