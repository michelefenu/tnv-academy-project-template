import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Movie, Movies } from 'src/app/models/movie';



@Component({
  selector: 'tnv-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit{

  title = 'La tua Partita';
  public show:boolean = false;
  buttonName: string; //string aggiunto dopo 
  randomId: number;
  min: number = 500;
  max: number = 550;

  movies: Movie[] = [];
  movie: Movie;

  constructor(private http: HttpClient){
    this.randomId = this.getRandomInt(this.min, this.max);
  }
//al posto di 550 mettiamo un id modificabile
  ngOnInit(): void {

      this.http.get<Movie>(`https://api.themoviedb.org/3/movie/${this.randomId}?api_key=8401b10a43e9d31af2e82091f450d1f4`)
      .subscribe({
        next: (response) => {
        
        this.movie = response;
        },
        error: (error) => console.log('Errore!', error) 
    })
  }


  //this.movie = this.movies[Math.floor(Math.random() * this.movies.length)];
  
  /*
  ngOnInit(): void {
    fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=8401b10a43e9d31af2e82091f450d1f4`)
    .then(res => res.json()) //convertiamo response in json
    .then((res) => {
        this.movies = res; 
    })
    */
   
    
    //console.log(this.movie);
    //console.log(this.movie.title);
    //console.log(this.movie.backdrop_path);
    //console.log(this.movie.poster_path);
  


  getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }











  //https://www.encodedna.com/angular/how-to-show-hide-or-toggle-elements-in-angular-4.htm#:~:text=The%20*ngIf%20directive%20has%20a,hide%20elements%20inside%20the%20container.
  toggle(/*o ci passo dei parametri buttonName, o creiamo un button esterno o...*/) {
    this.show = !this.show;
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }

  /*
  -fare meglio l'hiding dei bottoni, sono separati
  -far apparire l'immagine, penso basti l'API
  -ogni volta che un bottone viene premuto, deve essere chiamata la funzione aumentaTimer
  -far iniziare una funzione aumenta timer
  -far si che quando si digita il form ci sia un check se corrisponde a movie.title
  -se corrisponde a invio del form, invoca fermaTimer e
            -manda a review component/appare
            -invia come parametri id film, id utente e string recensione
  -se non corrisponde deve angular sound o un messaggio rosso

  */ 
}
