import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from '../../hero';
import { MessageService } from '../../services/message.service';

import { HeroService } from '../../services/hero.service';

@Component({
	selector: 'app-hero-detail',
	templateUrl: './hero-detail.component.html',
	styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
	@Input() private hero: Hero;
	constructor(
		private route: ActivatedRoute,
		private heroService: HeroService,
		private location: Location,
		private messageService: MessageService
	) { }

	ngOnInit(): void  {
		this.getHero();
	}

	private getHero(): void {
		const ID =+ this.route.snapshot.paramMap.get('id');
		this.heroService.getHero(ID)
			.subscribe(hero => this.hero = hero);
	}

	goBack(): void {
		this.messageService.clearMessage();
		this.location.back();
	}
}
