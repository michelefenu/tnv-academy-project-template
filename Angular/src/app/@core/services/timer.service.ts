// timer.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  private timerSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  get timer$(): Observable<number> {
    return this.timerSubject.asObservable();
  }

  startTimer(): void {
    timer(0, 1000)
      .pipe(
        switchMap(() => this.timerSubject),
        tap((currentValue) => this.timerSubject.next(currentValue + 1000))
      )
      .subscribe();
  }

  incrementTimer(seconds: number): void {
    const currentValue = this.timerSubject.value;
    this.timerSubject.next(currentValue + seconds * 1000);
  }

  clearTimer(): void {
    this.timerSubject.next(0);
  }
}
