import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroServiceForResolver } from '../services';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'r-list',
  template: `
    <ul *ngIf="heroes">
      <li *ngFor="let hero of heroes">{{hero.id}} - {{hero.name}}</li>
    </ul>
  `
})
export class RListComponent implements OnInit {
  public heroes: Hero[] = [];

  constructor(private heroService: HeroServiceForResolver) {}

  public ngOnInit() {
    this.heroService.getHeroes().toPromise().then((heroes) => this.heroes = heroes);
  }
}
