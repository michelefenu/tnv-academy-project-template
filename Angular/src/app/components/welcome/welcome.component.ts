import { Component, OnInit, ViewChild } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { TrendingSectionComponent } from '../trending-section/trending-section.component';

@Component({
  selector: 'tnv-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  @ViewChild(SearchComponent) searchComponent!: SearchComponent;

  constructor() { }

  ngOnInit(): void {
  }

  movieResult: any[] = [];

  handleSearchResults(result: any[]) {
    this.movieResult = result;
  }

}
