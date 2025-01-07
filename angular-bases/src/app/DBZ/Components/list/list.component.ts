import { Component, Input } from '@angular/core';
import { Character } from '../../Interfaces/character';

@Component({
  selector: 'cmp-list',
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  @Input() 
  characterList :Character[] = [];
}
