import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ExportAsConfig, ExportAsService } from 'ngx-export-as';
import { Movie } from 'src/app/models/movie';
import { Rating } from 'src/app/models/rating';
import html2canvas from 'html2canvas';   //to install

//TO INSTALL:
// npm install --save html2canvas file-saver
//npm i ngx-export-as

@Component({
  selector: 'tnv-movie-section',
  templateUrl: './movie-section.component.html',
  styleUrls: ['./movie-section.component.scss']
})
export class MovieSectionComponent implements OnInit {

  formData = {
    ratingNum: '',
    review: ''
  };

  @ViewChild('content') content!: ElementRef;
  @ViewChild(MatAccordion) accordion!: MatAccordion; //accordion input for rating
  @ViewChild('f') form!: NgForm; //form data

  @Input() userId: any = '';  //get userId from parent component Welcome
  @Input() movies: any[] = []; //get movies form parent component Welcome
  @Input() actorId: number = 0;

  //Rating emit to Welcome component (parent)
  @Output() ratingToEmit = new EventEmitter<Rating>(); // emit filled rating to parent component

  ratings: Rating[] = []; //TEST not needed?

  //CHECK and add popup notification
  constructor(private snackBar: MatSnackBar, private exportAsService: ExportAsService) { }

  ngOnInit() {
    console.log("USER ID: ", this.userId) //Test OK

  }

  resetFormValues() {
    this.form.resetForm();
  }

  compileRating(movieId: number,
    posterPath: string,
    movieTitle: string,
    movieOverview: string,
    movieReleaseDate: string,
    formData: { ratingNum: string, review: string }) {
    if (!this.form.value.review || !this.form.value.ratingNum) {
      console.log("Error: Review or rating missing");
      return;
    }
    const rating: Rating = {
      userId: this.userId,
      movieId: movieId.toString(),
      posterPath: posterPath,
      movieTitle: movieTitle,
      movieOverview: movieOverview,
      movieReleaseDate: movieReleaseDate,
      review: this.formData.review,
      rating: parseInt(this.formData.ratingNum) //parsing the string of rate
    };
    this.emitRatingToSave(rating);
    this.resetFormValues();  //reset form values
  }

  emitRatingToSave(ratingToSave: Rating) {
    this.ratingToEmit.emit(ratingToSave);
  }

  //Tools for png download
  printArea: ExportAsConfig = {
    type: 'png',
    elementIdOrContent: 'area'
  };

  download(){
    //LUCA
    this.exportAsService.save(this.printArea, 'area').subscribe(() => {});
  }

  captureScreen() {
    html2canvas(this.content.nativeElement).then(canvas => {
      const imageURL = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = 'screenshot.png';
      link.href = imageURL;
      link.click();
    });
  }
}

