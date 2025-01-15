import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';
import { GifsTrending as GifTrend, SearchResponseTrending } from '../interfaces/gifs-trending.interfaces';
import { GifRandom, SearchResponseRandom } from '../interfaces/gifs-random.interfaces';


@Injectable({
  providedIn: 'root'
})
export class GifsService {
  // Servicios de la api
  private serviceURL = 'https://api.giphy.com/v1/gifs';
  private apiKey = "T9QQ3y24IpLfvGEnSlOc0jTd9BRvJuMZ";

  // lista e historial de busqueda
  public giftList: Gif[] = [];
  private _tagHistory: string[] = [];//['Goku', 'Vegeta', 'Naruto', 'Sasuke', 'Luffy', 'Zoro', 'Ichigo', 'Gon', 'Killua', 'Gintoki'];

  // lista y offset para la paginacion
  // GifTrending
  public gifTrending: GifTrend[] = [];
  public offset= 0;

  // GifRandom
  public gifRandom!: GifRandom;


  constructor(private http: HttpClient) {
    this.loadLocalStorage();
  }

  get tagHistory() {
    return [...this._tagHistory];
  }

  private saveLocalStorage() {
    localStorage.setItem('history', JSON.stringify(this._tagHistory));
  }
  private loadLocalStorage() {
    const local = localStorage.getItem('history');
    if (local) {
      // el ! es para decirle a typescript que no se preocupe que ya se que no es null
      this._tagHistory = JSON.parse(local!);
      console.log('History loaded');
    } else {
      this._tagHistory = [];
      console.log('No history found');
    }
  }


  private organizeHistory(tag: string): void {
    tag = tag.trim().toLowerCase();
    if (this._tagHistory.includes(tag)) {
      this._tagHistory = this._tagHistory.filter(tagHistory => tagHistory !== tag);
    }
    this._tagHistory.unshift(tag);
    this._tagHistory = this._tagHistory.splice(0, 10);
    this.saveLocalStorage();
  }



  searchTag(tag: string): void {
    if (tag.trim().length === 0) {
      return;
    }
    this.organizeHistory(tag);
    //set the parameters
    const urlParams = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', tag)
      .set('limit', '10');

    //call the service
    this.http.get<SearchResponse>(`${this.serviceURL}/search`, { params: urlParams })
      .subscribe((response) => {
        this.giftList = response.data;
        
      })
  }

  searchTrending(offset: number): void {
    //check the list is empty
    if (this.gifTrending.length > 0) {
      //clean the list
      this.gifTrending = [];
    }
    //set the parameters
    const urlParams = new HttpParams()
      .set('api_key', this.apiKey)
      //show 5 gifs
      .set('limit', '5')
      //set the offset
      .set('offset', offset.toString())
    //call the service
    
    this.http.get<SearchResponseTrending>(`${this.serviceURL}/trending`, { params: urlParams })
      .subscribe((response) => {
        this.gifTrending = response.data;
        
      })
  }
  //pagging gif trending
  nextTrending(): void {
    //if the offset is equals or greater than 500, backward the offset
    if (this.offset === 500) {
      this.offset = 0;
    }else{
      this.offset += 5;
    }
    this.searchTrending(this.offset);
  }

  searchRandomGift(): void{
    //set the parameters
    const urlParams = new HttpParams()
      .set('api_key', this.apiKey);
    //call the service
    this.http.get<SearchResponseRandom>(`${this.serviceURL}/random`, { params: urlParams })
      .subscribe((response) => {
        this.gifRandom = response.data;
        
      });
  }

}
