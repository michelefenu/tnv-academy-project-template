import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs';
import { TimeGame } from 'src/app/models/time';


@Injectable({
  providedIn: 'root'
})
export class GiocoTimeService {

    constructor(private httpClient: HttpClient) {}
   
    API_ROOT = 'http://localhost:1234/api';

  
  
    getTimer(userId: string, movieId: string) {
      return this.httpClient.get<TimeGame>(`${this.API_ROOT}/timer/${userId}/${movieId}`);
    }
  
    createTimer(timer: TimeGame) {
      return this.httpClient.post<TimeGame>(`${this.API_ROOT}/timer/`, timer);
    }
  
    updateTimer(timer: TimeGame) {
      return this.httpClient.patch<TimeGame>(`${this.API_ROOT}/timer/${timer.id}`, timer)
        .pipe(switchMap(() => this.getTimer(timer.userId, timer.movieId)));
    }
  
    deleteTimer(id: string) {
      return this.httpClient.delete(`${this.API_ROOT}/timer/${id}`);
    }
  }