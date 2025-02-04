import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Listado de heroes de DC Y MARVEL';
  // numero: number = 12345.6789;
  // fecha: Date = new Date();
  // porcentaje: number = 0.234;
}
