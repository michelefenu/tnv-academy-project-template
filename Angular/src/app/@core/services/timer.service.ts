import { Injectable } from '@angular/core';
import { Observable, Subject, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  private seconds = 0;
  private timerSubject = new Subject<number>();
  private timerSubscription: any;

  getTimer(): Observable<number> {
    return this.timerSubject.asObservable();
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
      this.timerSubscription = null; // Resetta la sottoscrizione
    }
  }

  resetTimer(): void {
    this.seconds = 0;
    this.timerSubject.next(this.seconds);
  }
}