import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';
import { Component, Input } from '@angular/core';
import { Hero } from '../../interfaces/heroe';
import { HeroImagePipe } from "../../pipes/hero-image.pipe";

@Component({
  selector: 'cmp-hero-card',
  imports: [CommonModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatDividerModule,
    MatIconModule, HeroImagePipe],
  templateUrl: './hero-card.component.html',
  styles: ``
})
export class HeroCardComponent {
  @Input()
  public heroe!: Hero;

  ngOnInit(): void {
    if (!this.heroe) {
      throw new Error('heroe is required');
    }
  }


}
