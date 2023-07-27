import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tnv-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  @Input() title:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
