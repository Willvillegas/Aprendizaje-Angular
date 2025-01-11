import { Component, Input } from '@angular/core';
import { Gif } from '../../../interfaces/gifs.interfaces';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'cmp-gifs-card-list',
  imports: [CardComponent],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent {
  @Input()
  gifs:Gif[]=[];
  constructor() { }
}
