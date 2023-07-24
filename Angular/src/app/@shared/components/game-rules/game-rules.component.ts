import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/@core/servicesAuth/auth.service';


@Component({
  selector: 'tnv-game-rules',
  templateUrl: './game-rules.component.html',
  styleUrls: ['./game-rules.component.scss'],

})
export class GameRulesComponent implements OnInit{


  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
    /*
  goToGioca() {
    this.router.navigateByUrl("/gioca");
  }*/
}

  