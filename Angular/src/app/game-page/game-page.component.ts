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
  public time = 0;

  constructor() { }

  ngOnInit(): void {
    if(this.isCollapsedAnno!){
      this.time = this.time +30;
    }
    if(this.isCollapsedCategoria!){
      this.time = this.time +30;
    }
    if(this.isCollapsedRegista!){
      this.time = this.time +30;
    }
   
}

}
