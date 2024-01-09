import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { TimerService } from 'src/app/@core/services/timer.service';

@Component({
  selector: 'tnv-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnDestroy{
  secondsElapsed = 0;
  timerRunning = false;
  temp!:number;

  private timerSubscription: any;

  constructor(private timerService: TimerService) {}

 

  startTimer(): void {
    if (!this.timerRunning) {
      this.timerService.startTimer();
      this.timerSubscription = this.timerService.getTimer().subscribe((seconds) => {
        this.secondsElapsed = seconds;
        this.timerService.setSeconds(this.secondsElapsed);

    
        console.log(seconds);
      });
      this.timerRunning = true;
    }
  }

  stopTimer(): void {
    if (this.timerRunning) {
      this.timerService.setSeconds(this.secondsElapsed);
      this.timerService.stopTimer();
      if (this.timerSubscription) {
        this.timerSubscription.unsubscribe();
      }
      this.timerRunning = false;
    }
  }


  ngOnDestroy(): void {
    this.stopTimer();
  }
  @HostListener('window:beforeunload', ['$event'])
  unloadHandler(event: Event): void {
   
    this.timerService.setSeconds(0);
  }

  


}