import { OnChanges } from '@angular/core';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MovieService } from 'src/app/movie.service';
import {Filter} from "../../models/filter";
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'tnv-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {

  public selectedFilter: Filter = new Filter();

  @Output() selectedChange = new EventEmitter<Filter>();

  constructor(private movieService: MovieService) {
  }

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


}
