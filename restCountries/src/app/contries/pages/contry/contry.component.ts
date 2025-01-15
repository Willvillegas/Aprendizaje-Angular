import { Component } from '@angular/core';
import { Country } from '../../../interfaces/countries.interface';
import { ContriesService } from '../../services/contries.service';
import { CommonModule,Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-contry',
  imports: [CommonModule],
  templateUrl: './contry.component.html',
  styleUrl: './contry.component.css'
})
export class ContryComponent {

  country!: Country|null;


  constructor(
    private serviceCountries: ContriesService,
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) { }
  ngOnInit(): void {
    //1. Obtener el parametro de la ruta
    //2. Llamar al servicio para obtener la informacion del pais con el id
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.serviceCountries.searchByCode(id))
      )
      .subscribe(country => {
        if(!country){
          this.route.navigateByUrl('/countries/by-capital');
        }else{
          this.country = country;
        }
      });
  }
  backPage(): void {
    this.location.back();
  }

}




