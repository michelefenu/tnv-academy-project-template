import { Component } from "@angular/core";

@Component({
  selector: "tnv-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent{
  isNavbarCollapsed: boolean = true;

}
