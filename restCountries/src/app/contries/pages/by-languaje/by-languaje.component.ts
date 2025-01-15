import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { ContriesTableComponent } from '../../components/contries-table/contries-table.component';
import { Country } from '../../../interfaces/countries.interface';
import { ContriesService } from '../../services/contries.service';

@Component({
  selector: 'app-by-languaje',
  imports: [SearchBoxComponent,CommonModule,ContriesTableComponent],
  templateUrl: './by-languaje.component.html',
  styleUrl: './by-languaje.component.css'
})
export class ByLanguajeComponent {
  countries: Country[]=[];

  constructor(private serviceCountry :ContriesService) { }

  searchLanguaje(termino: string){
    this.serviceCountry.searchByLanguaje(termino)
    .subscribe(countries => {
      this.countries = countries;
    });
  }
}
