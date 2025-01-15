import { Component, Input } from '@angular/core';
import { Country } from '../../../interfaces/countries.interface';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'cmp-contries-table',
  imports: [CommonModule,RouterModule],
  templateUrl: './contries-table.component.html',
  styleUrl: './contries-table.component.css'
})
export class ContriesTableComponent {
  @Input() 
  countries: Country[] = [];

}
