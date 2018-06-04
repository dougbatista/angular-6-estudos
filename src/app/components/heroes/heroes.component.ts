import { Component, OnInit } from '@angular/core';
import { Hero } from '../../hero';
import { HeroService } from '../../services/hero.service';

@Component({
	selector: 'app-heroes',
	templateUrl: './heroes.component.html',
	styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
	public heroes: Hero[];
	constructor(private heroService: HeroService) { }

	public ngOnInit() {
		this.getHeroes();
	}

	private getHeroes(): void {
		this.heroService.getHeroes()
		.subscribe(heroes => this.heroes = heroes);
	}
}
