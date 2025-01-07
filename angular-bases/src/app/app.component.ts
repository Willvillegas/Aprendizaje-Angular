import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
// import { AddressComponent } from './modules/address/address.component';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from './DBZ/Pages/main-page/main-page.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule,MainPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  numero:number= 3.1416;
  title:boolean = true;
  fruits:string[] = ['Manzana', 'Pera', 'Banana', 'Naranja', 'Mandarina', 'Kiwi', 'Frutilla', 'Uva', 'Cereza', 'Durazno'];


  isActive () : string{
    return this.title  ? 'active' : 'inactive';
  }
}
