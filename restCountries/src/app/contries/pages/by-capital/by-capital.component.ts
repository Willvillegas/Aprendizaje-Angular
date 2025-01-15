import { Component } from '@angular/core';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { Country } from '../../../interfaces/countries.interface';
import { ContriesService } from '../../services/contries.service';
import { CommonModule } from '@angular/common';
import { ContriesTableComponent } from '../../components/contries-table/contries-table.component';

@Component({
  selector: 'app-by-capital',
  imports: [SearchBoxComponent,CommonModule,ContriesTableComponent],
  templateUrl: './by-capital.component.html',
  styleUrl: './by-capital.component.css'
})
export class ByCapitalComponent {
  countries: Country[]=[];

  constructor(private serviceCountry :ContriesService) { }

  searchCapital(termino: string){
    this.serviceCountry.searchCapital(termino)
    .subscribe(countries => {
      this.countries = countries;
    });
  }
}
