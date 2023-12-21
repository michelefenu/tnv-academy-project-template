import { Component, OnInit } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { TrendingSectionComponent } from '../trending-section/trending-section.component';

@Component({
  selector: 'tnv-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
