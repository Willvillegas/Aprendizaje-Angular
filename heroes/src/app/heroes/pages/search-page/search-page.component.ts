import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HeroeService } from '../../services/heroe.service';
import { Hero } from '../../interfaces/heroe';
import { HeroCardComponent } from '../../components/hero-card/hero-card.component';

@Component({
  selector: 'app-search-page',
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    HeroCardComponent
],
  templateUrl: './search-page.component.html',
  styles: ``
})
export class SearchPageComponent {
  public searchInput: FormControl =  new FormControl();
  public heroes: Hero[] = [];
  public selectedHero?: Hero;

  constructor(private heroService :HeroeService) { }

  searchHeroe():void {
    const value: string = this.searchInput.value || '';
    this.heroService.getSuggestions(value)
    .subscribe(heroes => this.heroes = heroes);
  }

  onSelectedOption(event :MatAutocompleteSelectedEvent):void {
    if (!event.option.value) {
      this.selectedHero = undefined;
      return;
    }
    const heross:Hero = event.option.value;
    this.selectedHero = heross;
    this.searchInput.setValue(heross.superhero);
  }
}
