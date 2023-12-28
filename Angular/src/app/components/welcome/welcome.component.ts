import { Component, OnInit, ViewChild } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { TrendingSectionComponent } from '../trending-section/trending-section.component';
import { MovieService } from 'src/app/movie.service';
import { catchError } from 'rxjs';
import { error } from 'console';


@Component({
  selector: 'tnv-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  @ViewChild(SearchComponent) searchComponent!: SearchComponent;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    /* // Effettua la chiamata API al servizio MovieService
    this.movieService.getMoviesByActor('Tom Cruise').subscribe(
      (result) => {
      console.log('Risultati ricerca:', result);
  
      // Verifica se 'results' è definito e non vuoto
      if (result && result.length > 0) {
        // Assegna i risultati alla tua variabile movieResult
        this.movieResult = result;
      } else {
        console.log('Nessun risultato trovato.');
      }
    },
    (error) => {
      console.error('Errore durante la chiamata API', error);
    }
    ); */
  }



  movieResult: any[] = [];
  actorName: string = "";

  /* handleSearchResults(actorName: string) {
    this.actorName = actorName;
    this.movieService.getMoviesByActor(actorName).subscribe(
      (result) => {
        console.log('Risultati ricerca:', result);

        if (result && result.length > 0) {
          // Assegna i risultati alla tua variabile movieResult
          this.movieResult = result;
        } else {
          console.log('Nessun risultato trovato.');
        }
      },
      (error) => {
        console.error('Errore durante la chiamata API', error);
      }
    );

  } */

  handleSearchResults(searchData: { type: string, searchTerm: string }) {
    if (searchData.type === '1') {
      this.searchMoviesByActor(searchData.searchTerm);
    } else if (searchData.type === '2') {
      this.searchMoviesByTitle(searchData.searchTerm);
    }
  }


    private searchMoviesByActor(actorName: string) {
    this.actorName = actorName;
    this.movieService.getMoviesByActor(actorName).subscribe(
      (result) => {
        console.log('Risultati ricerca:', result);

        if (result && result.length > 0) {
          // Assegna i risultati alla tua variabile movieResult
          this.movieResult = result;
        } else {
          console.log('Nessun risultato trovato.');
        }
      },
      (error) => {
        console.error('Errore durante la chiamata API', error);
      }
    );
  }

  private searchMoviesByTitle(title: string){
    this.movieService.getMoviesByTitle(title).subscribe(
      (result) => {
        console.log('Risultato ricerca per titolo:', result);
        if(result && result.length > 0) {
          this.movieResult = result;
        } else {
          console.log('Nessun risultato per il titolo cercato.');
        }
      },
      (error) => {
        console.error('Errore durante la chiamata API per il titolo', error);
      }
    );
  }

}

