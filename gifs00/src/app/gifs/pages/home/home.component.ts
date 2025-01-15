import { Component } from '@angular/core';
//import { CardComponent } from '../../components/card/card.component';
import { CardListComponent } from '../../components/card-list/card-list.component';
import { SearchBoxComponent } from '../../components/search-box/search-box.component';
import { GifsService } from '../../../services/gifs.service';
import { Gif } from '../../../interfaces/gifs.interfaces';
import { CommonModule } from '@angular/common';
import { GifsTrending } from '../../../interfaces/gifs-trending.interfaces';
import { CardListTrendingComponent } from '../../components/card-list-trending/card-list-trending.component';
import { GifRandom } from '../../../interfaces/gifs-random.interfaces';


@Component({
  selector: 'app-home',
  imports: [CommonModule, CardListComponent, SearchBoxComponent, CardListTrendingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private gifService :GifsService) {
    this.onCallNextTrending();
    this.onCallNextRandom();
   }

  
  setTitle(value: string): string {
    return value;
  }

  get gifs() : Gif[]{
    return this.gifService.giftList;
  }
  get gifsTrending() : GifsTrending[]{
    return this.gifService.gifTrending;
  }

  get gifsRandom() : GifRandom[]{
    return [this.gifService.gifRandom];
  }

  onCallNextTrending():void {
    this.gifService.nextTrending();
  }

  onCallNextRandom():void {
    this.gifService.searchRandomGift();
  }
}
