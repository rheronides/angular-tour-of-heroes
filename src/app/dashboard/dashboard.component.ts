import { HeroService } from './../services/hero.service';
import { Component, OnInit } from '@angular/core';
import { IHero } from '../interfaces/Iheroes';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes : IHero[] = [];
  constructor(private heroService : HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void{
    this.heroService.getHeros().subscribe(heroes => this.heroes = heroes.slice(1,5));
  }
}
