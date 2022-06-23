import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/@core/services/auth.service';

@Component({
  selector: 'tnv-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
  }

}
