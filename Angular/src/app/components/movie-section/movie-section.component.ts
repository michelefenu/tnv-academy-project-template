import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
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
export class MovieSectionComponent implements OnInit, OnChanges {

  formData = {          //structure of formData containing rating and review
    ratingNum: '',
    review: ''
  };

  @ViewChild('content') content!: ElementRef;        //view content targhet for png downlading (see method below)
  @ViewChild(MatAccordion) accordion!: MatAccordion; //accordion input for rating
  @ViewChild('f') form!: NgForm; //form data

  @Input() userId: any = '';        //get userId from parent component Welcome
  @Input() movies: any[] = [];      //get movies form parent component Welcome
  @Input() actorId: number = 0;     //get the actorId from parent component Welcome

  //Rating emit to Welcome component (parent)
  @Output() ratingToEmit = new EventEmitter<Rating>(); // emit filled rating to parent component

  constructor(private snackBar: MatSnackBar, private exportAsService: ExportAsService) { }
  
  ngOnChanges(changes: SimpleChanges): void { 
    if (changes['movies'] && changes['movies'].currentValue) {
      this.movies = changes['movies'].currentValue;
    }
  }

  ngOnInit() {
  }

  //method to compile a rating with mixed data
  compileRating(movieId: number,          //arguments: values form card and form
    posterPath: string,
    movieTitle: string,
    movieOverview: string,
    movieReleaseDate: string,
    formData: { ratingNum: string, review: string }) {
    //check if review and rating inputs have values
    if (!this.form.value.review || !this.form.value.ratingNum) {
      console.log("Error: Review or rating missing");
      return;
    }
    const rating: Rating = {      //create an object Rating with form data + card data
      userId: this.userId,
      movieId: movieId.toString(),
      posterPath: posterPath,
      movieTitle: movieTitle,
      movieOverview: movieOverview,
      movieReleaseDate: movieReleaseDate,
      review: this.formData.review,
      rating: parseInt(this.formData.ratingNum)   //parsing the string of rate
    };
    if (this.formData.review.length <= 160) {     
      this.emitRatingToSave(rating);                            //method to emit object rating to parent WelcomeComponent
      this.resetFormValues();                                   //reset form values
      this.snackBar.open('Added to favorites', 'Dismiss', {     //PopUp notification when review and rating have been added to favorites
        duration: 3000,                                         //ERROR: notification appears even when there's error 500 with some movies
        verticalPosition: 'bottom'
      })
    }
    else {
      this.snackBar.open('Review too long [max 160 chars]', 'Dismiss', { //notification if review is too long
        duration: 3000,
        verticalPosition: 'bottom'
      })
    }
  }

  resetFormValues() {
    this.form.resetForm();                //reset values on form after clicking
  }

  emitRatingToSave(ratingToSave: Rating) {                //emit object rating to parent WelcomeComponent 
    this.ratingToEmit.emit(ratingToSave);
  }

  captureScreen() {                                       //method to download a png of a target area
    html2canvas(this.content.nativeElement).then(canvas => {
      const imageURL = canvas.toDataURL('image/png');       //format
      const link = document.createElement('a');
      link.download = 'listOfMovies.png';                   //name of downloaded file
      link.href = imageURL;
      link.click();
    });
  }
                                     //LUCA:
  printArea: ExportAsConfig = {
    type: 'png',
    elementIdOrContent: 'area'     
  };

  download() {                      //LUCA:
    this.exportAsService.save(this.printArea, 'area').subscribe(() => { });
  }
}

