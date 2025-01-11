import { Component, Input } from '@angular/core';

@Component({
  selector: 'cmp-gifs-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input()
  public title: string = '';
  @Input()
  public url: string = '';
}
