import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  seconds = 0;
  timerSubject = new Subject<number>();
  timerSubscription: any;

  timeGenere: number = 0;
  timeDescrizione: number = 0;
  timeUscita: number = 0;
  timeProduction: number = 0;

  private dataSubject = new BehaviorSubject<number>(0);
  data$ = this.dataSubject.asObservable();

  setTimeIndiziValue(genere:number,descrizione:number,uscita:number,production:number):void {
    this.timeGenere = genere;
    this.timeDescrizione = descrizione;
    this.timeUscita = uscita;
    this.timeProduction = production;
    this.dataSubject.next(this.getTimeIndiziValue());
  }
  
  getTimeIndiziValue(){
    return this.timeGenere + this.timeDescrizione + this.timeProduction + this.timeUscita + this.seconds;
   
  }











  getTimer(): Observable<number> {
    return this.timerSubject.asObservable();
  }

 

  setSeconds(newSeconds: number): void {
    this.seconds = newSeconds;
    console.log("service",this.seconds);
 
  }
  
 getSecondsElapsed(): number {
    return this.seconds;
    
  }


  startTimer(): void {
    if (!this.timerSubscription) {
      this.timerSubscription = timer(0, 1000).subscribe(() => {
        this.seconds++;
        this.timerSubject.next(this.seconds);
      });
    }
  }

  stopTimer(): void {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
      this.timerSubscription = null; 
    }
  }

  resetTimer(): void {
    this.seconds = 0;
    this.timerSubject.next(this.seconds);
  }
   


}