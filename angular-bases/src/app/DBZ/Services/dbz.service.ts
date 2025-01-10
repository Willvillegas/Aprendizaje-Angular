import { Injectable } from '@angular/core';
import { Character } from '../Interfaces/character';
import { v4} from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  //Emular los datos 
  character: Character[] = [
    {
      id: v4(),
      name: 'Goku-DB',
      power: 15000
    },
    {
      id: v4(),
      name: 'Vegeta-DB',
      power: 7500
    },
    {
      id: v4(),
      name: 'Krillin-DB',
      power: 5000
    }
  ];
  constructor() { }

  addCharacter(character: Character) {
    // character.id = v4();
    // this.character.push(character);
    this.character.push({id: v4(), ...character});
  }
  deleteCharacter(id: string) {
    this.character = this.character.filter(c => c.id !== id);
  }

  incrementPowerById(id: string, power: number):void {
    const found = this.character.find(c => c.id === id);
    if (found) {
      found.power += power;
    }

  }
}
