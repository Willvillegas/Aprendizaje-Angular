import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CardTrendingComponent } from "../card-trending/card-trending.component";
import { GifsTrending } from '../../../interfaces/gifs-trending.interfaces';
import { GifRandom } from '../../../interfaces/gifs-random.interfaces';

@Component({
  selector: 'cmp-card-list-trending',
  imports: [CardTrendingComponent],
  templateUrl: './card-list-trending.component.html',
  styleUrl: './card-list-trending.component.css'
})
export class CardListTrendingComponent {
  //recibir el trending del padre
  @Input()
  public listItem:GifsTrending[] | GifRandom[]=[];

  //recbir el titulo del padre
  @Input()
  public mainTitle:string = '';

  //llamar al servicio para paginar el trending
  @Output()
  public callParent : EventEmitter<void> = new EventEmitter();
  constructor() { }

  next():void{
    this.callParent.emit();
  }
}
