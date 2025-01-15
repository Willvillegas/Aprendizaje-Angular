import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// { GifsService } from './services/gifs.service';
import { HomeComponent } from "./gifs/pages/home/home.component";
import { SidebarComponent } from "./shared/components/sidebar/sidebar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
