import { Component } from '@angular/core';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { CommonModule } from '@angular/common';
import { ContriesTableComponent } from '../../components/contries-table/contries-table.component';
import { ContriesService } from '../../services/contries.service';
import { Country } from '../../../interfaces/countries.interface';

@Component({
  selector: 'app-by-region',
  imports: [SearchBoxComponent,CommonModule,ContriesTableComponent],
  templateUrl: './by-region.component.html',
  styleUrl: './by-region.component.css'
})
export class ByRegionComponent {
  countries: Country[]=[];

  constructor(private serviceCountry :ContriesService) { }

  searchRegion(termino: string){
    this.serviceCountry.searchRegion(termino)
    .subscribe(countries => {
      this.countries = countries;
    });
  }
}
