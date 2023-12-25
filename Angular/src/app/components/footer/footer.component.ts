import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedin, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons' ;


@Component({
  selector: 'tnv-footer',
  template: `
    <!-- Usa le icone social -->
    <fa-icon [icon]="faFacebookF"></fa-icon>
    <fa-icon [icon]="faTwitter"></fa-icon>
    <fa-icon [icon]="faInstagram"></fa-icon>
    <fa-icon [icon]="faLinkedin"></fa-icon>
    <fa-icon [icon]="faGithub"></fa-icon>
    <fa-icon [icon]="faGoogle"></fa-icon>
  `,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  faCoffee = faCoffee;
  faFacebookF = faFacebookF;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faGithub = faGithub;

}
