import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'tnv-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {


  onNgSubmit(form: NgForm) {
    console.log(form.value)
  }
}
