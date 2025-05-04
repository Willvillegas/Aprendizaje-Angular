import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  private localStorageKey = 'listatareas';

  constructor() { }

  getTareas(): string[] {
    return JSON.parse(localStorage.getItem(this.localStorageKey) as string) || [];
  }

  addTarea(tarea: string) {
    const tareas = this.getTareas();
    // if (!tareas || tareas.length === 0) {
    //   console.log("error en una tarea");
    //   throw new Error('No se pudo agregar');
    // }

    tareas.push(tarea);

    localStorage.setItem(this.localStorageKey, JSON.stringify(tareas));
  }

  deleteTarea(key: number) {
    const tareas = this.getTareas();
    if (!tareas || tareas.length === 0) {
      console.log("error en una tarea");
      throw new Error('No se pudo eliminar');
    }
    tareas.splice(key, 1);
    localStorage.setItem(this.localStorageKey, JSON.stringify(tareas));
  }
}
