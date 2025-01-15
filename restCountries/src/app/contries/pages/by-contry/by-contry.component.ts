import { Component } from '@angular/core';
import { Country } from '../../../interfaces/countries.interface';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { CommonModule } from '@angular/common';
import { ContriesTableComponent } from '../../components/contries-table/contries-table.component';
import { ContriesService } from '../../services/contries.service';

@Component({
  selector: 'app-by-contry',
  imports: [SearchBoxComponent,CommonModule,ContriesTableComponent],
  templateUrl: './by-contry.component.html',
  styleUrl: './by-contry.component.css'
})
export class ByContryComponent {
  countries: Country[]=[];
  
    constructor(private serviceCountry :ContriesService) { }
  
    searchCountry(termino: string){
      this.serviceCountry.searchCountry(termino)
      .subscribe(countries => {
        this.countries = countries;
      });
    }
}
