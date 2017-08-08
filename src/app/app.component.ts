import { Component } from '@angular/core';

export class Hero {
    id:number;
    name:string;
}
const HEROS: Hero[] = [
    {id:1, name:"Wonder Woman"},
    {id:2, name: "Thor"},
    {id:3, name: "Black Panther"},
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sarah Leahy';
  heros = HEROS;
  selectedHero: Hero;

  onSelect(hero: Hero) {
      this.selectedHero = hero;
  }
}
