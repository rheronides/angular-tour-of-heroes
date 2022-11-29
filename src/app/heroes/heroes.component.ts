import { MessageService } from './../services/message.service';
import { HeroService } from './../services/hero.service';
import { IHero } from './../interfaces/Iheroes';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes : IHero[] = [];

  constructor(private heroService : HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeros().subscribe(heroes => this.heroes = heroes);
  }

}
