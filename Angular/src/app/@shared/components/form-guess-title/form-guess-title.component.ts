import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'tnv-form-guess-title',
  templateUrl: './form-guess-title.component.html',
  styleUrls: ['./form-guess-title.component.scss']
})
export class FormGuessTitleComponent implements OnInit{

  constructor(){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  checkIfMovieCorrect(){
    console.log();
  }

}


