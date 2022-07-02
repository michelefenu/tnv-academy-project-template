import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from 'src/app/@models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieServicesService {
  movie = {};

  constructor(private http: HttpClient) {}

  ngOnInit() {
  
  }

}

