import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'tnv-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {

  @Input() selectedYear: number | undefined;
  @Input() selectedGenre: number | undefined;
  @Input() selectedLanguage: string | undefined;
  @Input() selectedPopularityGrade: string | undefined;
  @Input() selectedDuration: number | undefined;

  @Output() selectedYearChange: EventEmitter<number | undefined> = new EventEmitter<number | undefined>();
  @Output() selectedGenreChange: EventEmitter<number | undefined> = new EventEmitter<number | undefined>();
  @Output() selectedLanguageChange: EventEmitter<string | undefined> = new EventEmitter<string | undefined>();
  @Output() selectedPopularityGradeChange: EventEmitter<string | undefined> = new EventEmitter<string | undefined>();
  @Output() selectedDurationChange: EventEmitter<number | undefined> = new EventEmitter<number | undefined>();

  constructor(private movieService: MovieService) {}

  getMoviesByFilter(filterType: string): void {
    this.movieService.getMoviesByFilter(this.selectedYear, this.selectedGenre, this.selectedLanguage, this.selectedPopularityGrade, this.selectedDuration).subscribe(data => {
      console.log("Bao",data);
    });
  }

  onYearChange(): void {
    this.selectedYearChange.emit(this.selectedYear);
    this.getMoviesByFilter('year');
  }

  onGenreChange(): void {
    this.selectedGenreChange.emit(this.selectedGenre);
    this.getMoviesByFilter('genre');
  }

  onLanguageChange(): void {
    this.selectedLanguageChange.emit(this.selectedLanguage);
    this.getMoviesByFilter('language');
  }

  onPopularityChange(): void {
    this.selectedPopularityGradeChange.emit(this.selectedPopularityGrade);
    this.getMoviesByFilter('popularity');
  }

  onDurationChange(): void {
    this.selectedDurationChange.emit(this.selectedDuration);
    this.getMoviesByFilter('vote');
  }
}
