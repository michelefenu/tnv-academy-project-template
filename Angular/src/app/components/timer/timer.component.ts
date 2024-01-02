import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'tnv-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})

export class TimerComponent implements OnDestroy {
  counter: any;
  timerRef: any;
  running: boolean = false;
  startText = 'Start';

  constructor() {
    // Inizializza le variabili nel costruttore se necessario
    this.counter = 0; // o qualsiasi altro valore iniziale desiderato
    this.timerRef = 0;
  }

  startTimer() {
    this.running = !this.running;
    if (this.running) {
      this.startText = 'Stop';
      const startTime = Date.now() - (this.counter || 0);
      this.timerRef = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        this.counter = elapsedTime;
      });
    } else {
      this.startText = 'Start';
      if (this.timerRef !== undefined) {
        clearInterval(this.timerRef);
      }
    }
  }

  clearTimer() {
    this.running = false;
    this.startText = 'Start';
    this.counter = undefined;
    if (this.timerRef !== undefined) {
      clearInterval(this.timerRef);
    }
  }

  formatTime(milliseconds: number): string {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    const decimalPart = (milliseconds % 1000) / 1000;

    return `${minutes}:${formattedSeconds} ${decimalPart.toFixed(2).slice(4)}`;   //qui è possibile ridurre le cifre cronometro in scorrimento: .slice(2)= 0.00 000 ----> con millisecondi
  }

  newCardQuestion() {
    // Implementa la logica della funzione newCardQuestion qui
    console.log('Nuova domanda inserita!');
  }

  setUserPoints(){
    //implementare funzione che incrementa un punteggio di un user
  }

  ngOnDestroy() {
    if (this.timerRef !== undefined) {
      clearInterval(this.timerRef);
    }
  }
}
