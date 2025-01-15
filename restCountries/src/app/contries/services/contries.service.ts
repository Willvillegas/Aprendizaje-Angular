import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';

import { Country } from '../../interfaces/countries.interface';

@Injectable({
  providedIn: 'root'
})
export class ContriesService {
  //ruta de la api
  url:string= environment.apiUrl;

  constructor( private _http:HttpClient) { }

  searchCountry(term:string):Observable<Country[]>{
    return this._http.get<Country[]>(` ${this.url}/name/${term}`)
    .pipe(
      catchError(()=>of([]))
    );
  }
  searchCapital(term:string):Observable<Country[]>{
    return this._http.get<Country[]>(` ${this.url}/capital/${term}`)
    .pipe(
      catchError(()=>of([]))
    );
  }
  searchRegion(term:string):Observable<Country[]>{
    return this._http.get<Country[]>(` ${this.url}/region/${term}`)
    .pipe(
      catchError(()=>of([]))
    );
  }

  searchByCode(code:string):Observable<Country | null>{
    return this._http.get<Country[]>(` ${this.url}/alpha/${code}`)
    .pipe(
      map(countries=>countries.length>0 ? countries[0] : null),
      catchError(()=>of(null))
    )
  }
  searchByLanguaje(languaje:string):Observable<Country[]>{
    return this._http.get<Country[]>(` ${this.url}/lang/${languaje}`)
    .pipe(
      catchError(()=>of([]))
    );
  }
}
