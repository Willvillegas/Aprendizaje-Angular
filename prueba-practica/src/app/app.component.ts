import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TareasService } from './services/tareas.service';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prueba-practica';
  listaTareas: string[] = [];
  nuevatarea: string = '';
  constructor(private _tareasService: TareasService) {
    //obtenemos las tareas de forma incial
    this.listaTareas = _tareasService.getTareas();
  }

  add(): void {
    if (this.nuevatarea.length === 0) {
      return;
    }
    console.log(this.nuevatarea)
    this._tareasService.addTarea(this.nuevatarea);
    //hago el push para no tener que llamar más al servicio
    this.listaTareas.push(this.nuevatarea);
    // la seteo
    this.nuevatarea = '';
  }
  delete(key: number): void {
    this._tareasService.deleteTarea(key);
    this.listaTareas = this.listaTareas.filter((value) => {
      return value !== this.listaTareas[key];
    })
  }


}
