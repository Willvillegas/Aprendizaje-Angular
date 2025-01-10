import { Component, Output, EventEmitter } from '@angular/core';
import { Character } from '../../Interfaces/character';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cmp-add-character',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.scss',
  standalone: true
})
export class AddCharacterComponent {
  character: Character = {
    name: '',
    power: 0
  };

  @Output()
  onNewCharacter = new EventEmitter<Character>();

  onSubmitCharacter(  ) :void{
    if (this.character.name && this.character.power) {
      this.onNewCharacter.emit(this.character);
      this.character = {
        name: '',
        power: 0
      };
    }
  }


}
