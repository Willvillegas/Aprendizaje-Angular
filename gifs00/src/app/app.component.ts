import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GifsService } from './services/gifs.service';
import { HomeComponent } from "./gifs/pages/home/home.component";
import { SidebarComponent } from "./shared/components/sidebar/sidebar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gifs00';

  constructor (private gifService:GifsService){

  }
  callAPI(){
    this.gifService.searchTag('panda');
  }
}
