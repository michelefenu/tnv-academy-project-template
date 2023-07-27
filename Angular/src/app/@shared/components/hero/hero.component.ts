import { Component, Input } from '@angular/core';

@Component({
  selector: 'tnv-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {

  @Input() title: string = "Welcome";

  constructor(){}

  ngOnInit(): void {}

  

}
