import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class HeroService {

	private heroesUrl = 'api/heroes';  // URL to web api

	constructor(
		private http: HttpClient,
		private messageService: MessageService) { }
	
	public getHeroes(): Observable <Hero[]> {
		this.messageService.addMessage('Buscando políticos honestos...')
		return this.http.get<Hero[]>(this.heroesUrl)
			.pipe(
				tap(heroes => this.log(`fetched políticos`)),
				catchError(this.handleError('getPolíticos ', []))
			)
		/*this.messageService.addMessage('Buscando políticos honestos...')
		return of (HEROES);*/
	}

	public getHero(id: number): Observable<Hero> {
		this.messageService.addMessage(`HeroService: Fetched hero id=${id}`);
		return of(HEROES.find(hero => hero.id === id));
	}

	private log(message: string) {
		this.messageService.addMessage('HeroService ' + message);
	}

	/**
	 * Handle Http operation that failed.
	 * Let the app continue.
	 * @param operation - name of the operation that failed
	 * @param result - optional value to return as the observable result
	 */
	private handleError<T> (operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
	
		// TODO: send the error to remote logging infrastructure
			console.error(error); // log to console instead
		
			// TODO: better job of transforming error for user consumption
			this.log(`${operation} failed: ${error.message}`);
		
			// Let the app keep running by returning an empty result.
			return of(result as T);
		};
	}
}
