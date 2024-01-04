import { Component, OnInit } from '@angular/core';
import { CountdownModule } from 'ngx-countdown';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'tnv-gameroom',
  templateUrl: './gameroom.component.html',
  styleUrl: './gameroom.component.scss'
})
export class GameroomComponent implements OnInit {

  movie : Movie | undefined;    //any
  
  ngOnInit(): void {
  }

}
