import { Injectable } from '@angular/core';
import { Character } from '../Interfaces/character';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  //Emular los datos 
  character: Character[] = [
    {
      name: 'Goku-DB',
      power: 15000
    },
    {
      name: 'Vegeta-DB',
      power: 7500
    },
    {
      name: 'Krillin-DB',
      power: 5000
    }
  ];
  constructor() { }
}
