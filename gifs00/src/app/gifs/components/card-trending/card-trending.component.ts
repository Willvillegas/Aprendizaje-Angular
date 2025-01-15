/* eslint-disable @angular-eslint/component-selector */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, Input } from '@angular/core';

@Component({
  selector: 'cmp-gifs-card-trending',
  imports: [],
  templateUrl: './card-trending.component.html',
  styleUrl: './card-trending.component.css'
})
export class CardTrendingComponent {
  @Input() title: string = '';
  @Input() url: string = '';
}
