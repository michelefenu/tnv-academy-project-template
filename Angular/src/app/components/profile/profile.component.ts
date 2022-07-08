import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/@core/services/auth.service';
import { Posizione } from 'src/app/@models/classifica';
import { User } from 'src/app/@models/user';
import { FavoritesService } from 'src/app/@service/favorites.service';
import { ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { NgForm } from '@angular/forms';
@Component({
  selector: 'tnv-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  currentUser: Partial<User> = {};
  favorites: Posizione[] = [];
  closeResult = "";

  constructor(private authService: AuthService, private favoritesService: FavoritesService, public modalService: NgbModal,) { }

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
    const getObservable = this.favoritesService.getFavoritesByUserId();

    if (getObservable) {
      getObservable.subscribe({
        next: (favoriti: Posizione[]) => {
          this.favorites = favoriti;
        },
        error: (err) => console.error(err),
      });
    
  }
  }

  open(content: any) {
     
      this.modalService
        .open(content, { ariaLabelledBy: "modal-basic-title" })
        .result.then(
          (result) => {
            this.closeResult = `Closed with: ${result}`;
          },
          (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;

          }
        
        );
    
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }
  onSubmit(form: NgForm) {
    form.control.markAllAsTouched();
    const userId = this.currentUser.id;
    if (form.valid) {
      if(userId){
        this.authService.updateUser(userId,form.value);
        this.modalService.dismissAll;
     
    }
  }

}
}   


