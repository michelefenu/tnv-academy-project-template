import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/@core/services/auth.service';
import { RankingsService } from 'src/app/rankings.service';

@Component({
  selector: 'tnv-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.scss']
})
export class RankingsComponent implements OnInit {
  userId!: number | null;
  readonly: boolean | null = true;
  @Input() movie: any;

  constructor(private rankingsService: RankingsService, private authService: AuthService) {

};

  ngOnInit(): void {
    this.userId = this.authService.getCurrentUserId();
    this.getAllRating();
  }

  getAllRating() {
    this.rankingsService.getAllRatings(this.userId).subscribe(
      (response) => {
        console.log('Rating recuperato con successo', response);
        this.movie = response;
      },
      (error) => {
        console.error('Errore durante il recupero del rating', error);
      },
      () => {
        console.log('Chiamata completata');
      }
    );
  }
}