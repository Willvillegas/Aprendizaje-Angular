import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],//aqui colocamos los componentes que se van a utilizar dentro del modulo
  imports: [
    CommonModule //aqui colocamos los modulos que se van a utilizar dentro del modulo
  ],
  exports:[]//aqui colocamos los componentes que se van a utilizar fuera del modulo (dependiedo si este modulo es importado en otro modulo)
})
export class PruebamoduloModule { }
