import { Component, ElementRef, EventEmitter, Input,  Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shr-search-box',
  imports: [],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent/* implements OnInit */{
  @Input() 
  placeholder: string='';

  @Output()
  public onValue = new EventEmitter<string>();

  @ViewChild('txtInput')  
  searchElement!: ElementRef<HTMLInputElement>;

  search: string = '';

  ngOnInit() :void{
    this.search = sessionStorage.getItem('search') || ''; ;
    if(this.search){
      this.emitValue(this.search);
      //get html element by id
      //this.prueba();
    }
  }
  
  prueba():void{
    this.searchElement.nativeElement.value = this.search;
  }

  emitValue(value: string) {
    this.onValue.emit(value);
    sessionStorage.setItem('search', value);
  }
}
