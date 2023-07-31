import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/@core/servicesAuth/auth.service';
import { User } from 'src/app/models/user';


@Component({
  selector: 'tnv-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {



  currentUser: Partial<User> = {};

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
  }

}
