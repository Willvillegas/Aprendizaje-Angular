import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pruebacomponente',
  standalone: true,
  imports: [],
  templateUrl: './pruebacomponente.component.html',
  styleUrl: './pruebacomponente.component.css'
})
export class PruebacomponenteComponent implements OnInit{


  //propiedades del componente
  titulo: string = 'Hola Mundo';
  constructor() { }
  //metodo de inicialización o en su equivalente en react el hook useEffect
  ngOnInit() : void {
  }
}
