import { Component } from '@angular/core';
import { Hero } from '../../interfaces/heroe';
import { HeroeService } from '../../services/heroe.service';
import { CommonModule } from '@angular/common';
import { HeroCardComponent } from '../../components/hero-card/hero-card.component';

@Component({
  selector: 'app-list-page',
  imports: [CommonModule, HeroCardComponent],
  templateUrl: './list-page.component.html',
  styles: ``
})
export class ListPageComponent {
  listHeroes: Hero[] = []

  constructor(
    private heroeService: HeroeService
  ) { }
  ngOnInit(): void {
    this.heroeService.getHeroes()
      .subscribe(heroes => this.listHeroes = heroes)
  }

}
