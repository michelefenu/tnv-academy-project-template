import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


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
  public punteggio = 0;
  
  constructor() { }

  ngOnInit(): void {}
   

  answer(form: NgForm) {
    form.control.markAllAsTouched();
    if (form.valid) {
      this.punteggio = this.time;
      console.log(this.punteggio);
      }
  }

  interval: number | undefined;
  time = 0;
  startTimer() {
    let timer;
    timer = setInterval(() => (this.time = this.time + 1), 1000);
    return timer;
  }



}

