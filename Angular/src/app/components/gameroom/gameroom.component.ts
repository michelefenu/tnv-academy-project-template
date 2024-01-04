import { Component, OnInit } from '@angular/core';
import { CountdownModule } from 'ngx-countdown';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'tnv-gameroom',
  templateUrl: './gameroom.component.html',
  styleUrl: './gameroom.component.scss'
})
export class GameroomComponent implements OnInit {
[x: string]: any;
  movie : Movie | undefined;    //any

  constructor() {}

  ngOnInit(): void {}

  inviaTempoPartita():void{}
}
