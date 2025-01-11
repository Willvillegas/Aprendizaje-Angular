import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../../services/gifs.service';

@Component({
  selector: 'cmp-gifs-search-box',
  imports: [],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {

  // ViewChild decorator is used to get the reference of the input element in the template html
  //equivalent with document.querySelector('input') or document.getElementById('input')
  @ViewChild('txtBuscar')
  public tagInput!:ElementRef<HTMLInputElement>;

  constructor(private gifService :GifsService){}

  /**
   * searchTag
   */
  public searchTag() :void {
    const newTag = this.tagInput.nativeElement.value;
    this.gifService.searchTag(newTag);
    this.tagInput.nativeElement.value = '';
  }
}
