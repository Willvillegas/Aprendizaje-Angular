import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../Interfaces/character';
import { CommonModule } from '@angular/common';
import { CharacterPower } from '../../Interfaces/character-power';


@Component({
  selector: 'cmp-list',
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  standalone: true
})
export class ListComponent {
  @Input() 
  characterList :Character[] = [];

  @Output()
  deleteCharacter : EventEmitter<string> = new EventEmitter<string>();

  @Output()
  updateCharacterPower : EventEmitter<CharacterPower> = new EventEmitter<CharacterPower>();

  onDeleteCharacter(id? : string):void{
    if (id) 
    this.deleteCharacter.emit(id);
  }

  onUpdateCharacterPower(id? : string, power?:number):void{
    if (id && power){
      this.updateCharacterPower.emit({id,power});
    }
  }
}
