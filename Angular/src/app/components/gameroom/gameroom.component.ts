import { Component, OnInit } from '@angular/core';
import { CountdownModule } from 'ngx-countdown';

@Component({
  selector: 'tnv-gameroom',
  templateUrl: './gameroom.component.html',
  styleUrl: './gameroom.component.scss'
})
export class GameroomComponent implements OnInit {
[x: string]: any;

  constructor() {}

  ngOnInit(): void {}

  inviaTempoPartita():void{}
}
