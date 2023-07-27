import { Component, OnInit } from '@angular/core';
import { TmdService } from 'src/app/@shared/servicesTMD/tmd.service';

@Component({
  selector: 'tnv-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {



  constructor(public tmdService: TmdService) { }

  ngOnInit(): void {
  }

}
