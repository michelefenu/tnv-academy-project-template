import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/@core/services/auth.service';
import { ApiService } from 'src/app/@shared/services/api.service';
import { RatingService } from 'src/app/@shared/services/rating.service';

@Component({
  selector: 'tnv-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  ngOnInit(): void {
  }

}
