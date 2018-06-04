import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

	public createDb() {
		const heroes = [
			{ id: 11, name: 'Jair Bolsonaro' },
			{ id: 12, name: 'Tiririca' },
			{ id: 13, name: 'Marco Feliciano' },
			{ id: 14, name: 'Eduardo Bolsonaro' },
			{ id: 15, name: 'Eduardo Cunha' },
			{ id: 16, name: 'Eduardo Cunha' },
			{ id: 17, name: 'Jean Wyllys(cuspe)' },
			{ id: 18, name: 'Maria do Rosário' },
			{ id: 19, name: 'Paulo Maluf' }
		];
    	return {heroes};
	}
}
