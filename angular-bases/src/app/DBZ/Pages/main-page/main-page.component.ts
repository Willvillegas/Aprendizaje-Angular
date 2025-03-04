import { Component } from '@angular/core';
import { ListComponent } from '../../Components/list/list.component';
import { AddCharacterComponent } from '../../Components/add-character/add-character.component';
import { Character } from '../../Interfaces/character';
import { DbzService } from '../../Services/dbz.service';
import { CharacterPower } from '../../Interfaces/character-power';

@Component({
  selector: 'app-main-page',
  imports: [ListComponent,AddCharacterComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
  standalone: true
})
export class MainPageComponent {
  // characters : Character[]=[];

  constructor( private _dbzService : DbzService) { 
    // this.characters = _dbzService.character;
  }
  get characters  (): Character[]{
    return this._dbzService.character;
  }

  addCharacter(character: Character){
    this.characters.push(character);
  }
  // deleteCharacter(character: Character){
  //   this.characters = this.characters.filter(c => c.name !== character.name);
  // }
  receivedDelete(char : string){
    this._dbzService.deleteCharacter(char);
  }
  recievedUpdatePower(char : CharacterPower){
    this._dbzService.incrementPowerById(char.id,char.power);
  }
  recievedNewCharacter(char : Character){
    this._dbzService.addCharacter(char);
  }

}
