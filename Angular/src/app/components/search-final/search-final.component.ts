import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Filter } from 'src/app/models/filter';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'tnv-search-final',
  templateUrl: './search-final.component.html',
  styleUrl: './search-final.component.scss'
})
export class SearchFinalComponent {
  public selectedFilter: Filter = new Filter();

  @Output() searchEvent = new EventEmitter<string>();
  @Output() searchByTitleEvent = new EventEmitter<string>();
  @Output() selectedChange = new EventEmitter<Filter>();

  constructor(private movieService: MovieService) {}

  onYearChange = (event: MatSelectChange)=>{
    //console.log("onYearChange",event);
      this.selectedFilter.selectedYear=event.value;
      this.selectedChange.emit(this.selectedFilter);
  }

  onGenreChange = (event: MatSelectChange)=>{
      this.selectedFilter.selectedGenre=event.value;
      this.selectedChange.emit(this.selectedFilter);
  }

  onLanguageChange = (event: MatSelectChange)=>{
      this.selectedFilter.selectedLanguage=event.value;
      this.selectedChange.emit(this.selectedFilter);
  }
  onPopularityChange = (event: MatSelectChange)=>{
      this.selectedFilter.selectedPopularityGrade=event.value;
      this.selectedChange.emit(this.selectedFilter);
  }

  onDurationChange= (event: MatSelectChange)=>{
      this.selectedFilter.selectedDuration=event.value;
      this.selectedChange.emit(this.selectedFilter);
  }


  search(actorName: string) {  
    this.searchEvent.emit(actorName);
  }

  searchByTitle(title: string){
    this.searchByTitleEvent.emit(title);
  }  
  
  //codice relativo ad expansion panel dei filtri
  step = 0;

  setStep(index: number) {
    this.step = index;
  }
}
