import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/@core/services/auth.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'tnv-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  currentUser: Partial<User> = {};

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
  }

}
