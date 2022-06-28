import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tnv-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  imagePath: string="assets/images/welcome.jpg"
  constructor() { }

  ngOnInit(): void {
  }

}
