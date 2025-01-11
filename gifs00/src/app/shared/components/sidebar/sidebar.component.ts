import { Component } from '@angular/core';
import { GifsService } from '../../../services/gifs.service';

@Component({
  selector: 'shr-sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor(private gifService: GifsService) {}

  //obtengo el array del service
  get tags():string[] {
    return this.gifService.tagHistory;
  }

  searchTag(tag: string):void {
    this.gifService.searchTag(tag);
  }
}
