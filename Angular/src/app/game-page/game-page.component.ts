import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tnv-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {

  public isCollapsedLocandina = true;
  public isCollapsedCategoria = true;
  public isCollapsedRegista = true;
  public isCollapsedAnno = true;
  public isCollapsedNazione = true;

  constructor() { }

  ngOnInit(): void {
  }

}
