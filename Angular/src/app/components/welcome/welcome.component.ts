import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tnv-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  movies: any[] = [];

  onSearch(searchResults: any[]) {
    this.movies = searchResults;
  }
  constructor() { }

  ngOnInit(): void {
  }

}

