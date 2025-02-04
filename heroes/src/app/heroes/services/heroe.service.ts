import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { catchError, map, Observable, of, switchMap } from 'rxjs';
import { Hero } from '../interfaces/heroe';

@Injectable({
  providedIn: 'root'
})
export class HeroeService {
  apiURL = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.apiURL}/heroes`);
  }

  getHeroById(id: string): Observable<Hero | undefined> {
    return this.http.get<Hero>(`${this.apiURL}/heroes/${id}`)
      .pipe(
        catchError(err => of(undefined))
      );
  }

  updateHero(hero: Hero): Observable<Hero | undefined> {
    if (!hero.id) {
      throw new Error('El héroe no tiene un ID');
    }
    return this.http.patch<Hero>(`${this.apiURL}/heroes/${hero.id}`, hero)
  }

  createHero(hero: Hero): Observable<Hero | undefined> {
    if (!hero.id) {
      hero.id = hero.publisher.split(' ').join('-').toLowerCase() + '-' + hero.superhero.split(' ').join('-').toLowerCase();
    }

    return this.http.post<Hero>(`${this.apiURL}/heroes`, hero)
      .pipe(
        catchError(err => of(undefined))
      );
  }

  deleteHero(id: string): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiURL}/heroes/${id}`)
      .pipe(
        map(resp => true),
        catchError(() => of(false))
      );
  }

  getSuggestions(term: string): Observable<Hero[]> {
    return this.getHeroes().pipe(
      map(heroes => 
        heroes.filter(hero => hero.superhero.toLowerCase().includes(term.toLowerCase())))
    )
  }

}
