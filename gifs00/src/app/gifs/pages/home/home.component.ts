import { Component } from '@angular/core';
//import { CardComponent } from '../../components/card/card.component';
import { CardListComponent } from '../../components/card-list/card-list.component';
import { SearchBoxComponent } from '../../components/search-box/search-box.component';
import { GifsService } from '../../../services/gifs.service';
import { Gif } from '../../../interfaces/gifs.interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule,CardListComponent,SearchBoxComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private gifService :GifsService) { }

  get gifs() : Gif[]{
    return this.gifService.giftList;
  }

}
