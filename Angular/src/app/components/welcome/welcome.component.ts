import { Component, OnInit, ViewChild } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { TrendingSectionComponent } from '../trending-section/trending-section.component';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'tnv-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  @ViewChild(SearchComponent) searchComponent!: SearchComponent;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    // Effettua la chiamata API al servizio MovieService
    this.movieService.getMoviesByActor('Tom Cruise').subscribe((result) => {
      console.log('Risultati ricerca:', result);
  
      // Verifica se 'results' è definito e non vuoto
      if (result && result.results && result.results.length > 0) {
        // Assegna i risultati alla tua variabile movieResult
        this.movieResult = result.results[0].known_for;
      } else {
        console.log('Nessun risultato trovato.');
      }
    });
  }

  movieResult: any[] = [];

  handleSearchResults(result: any[]) {
    console.log('Risultati ricerca:', result);
  
    if (result && result.length > 0) {
      this.movieResult = result[0].known_for;
    } else {
      console.log('Nessun risultato trovato.');
    }
  }

}
