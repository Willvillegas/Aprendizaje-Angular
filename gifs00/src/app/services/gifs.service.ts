import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public giftList: Gif[] = [];
  private serviceURL: string = 'https://api.giphy.com/v1/gifs'; 
  private apiKey: string = "T9QQ3y24IpLfvGEnSlOc0jTd9BRvJuMZ";
  private _tagHistory: string[] = ['Goku', 'Vegeta', 'Naruto', 'Sasuke', 'Luffy', 'Zoro', 'Ichigo', 'Gon', 'Killua', 'Gintoki'];
  constructor( private http:HttpClient) { 
    this.loadLocalStorage();
  }

  get tagHistory() {
    return [...this._tagHistory];
  }

  private saveLocalStorage() {
    localStorage.setItem('history', JSON.stringify(this._tagHistory));
  }
  private loadLocalStorage() {
    const local= localStorage.getItem('history');
    if (local) {
      // el ! es para decirle a typescript que no se preocupe que ya se que no es null
      this._tagHistory = JSON.parse(local!);
      console.log('History loaded');
    }else{
      this._tagHistory = [];
      console.log('No history found');  
    }
  }


  private organizeHistory( tag:string):void {
    tag = tag.trim().toLowerCase();
    if (this._tagHistory.includes(tag)) {
      this._tagHistory = this._tagHistory.filter( tagHistory => tagHistory !== tag);
    }
    this._tagHistory.unshift(tag);
    this._tagHistory = this._tagHistory.splice(0,10);
    this.saveLocalStorage();
  }



  searchTag(tag :string):void {
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
    this.http.get<SearchResponse>(`${this.serviceURL}/search`, { params: urlParams})
    .subscribe((response) => {
      this.giftList = response.data;
      console.log(this.giftList);
    })
  }

}
