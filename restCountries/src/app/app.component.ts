import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContriesService } from './contries/services/contries.service';
import { Country } from './interfaces/countries.interface';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,SideBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'restContries';
  array:Country[]=[];

  constructor(private serviceCountry:ContriesService){}

  

  ngOnInit():void{
    console.log('hola');
    this.serviceCountry.searchCountry('Cos')
    .subscribe((data)=>{
      console.log(data);
      this.array=data;
    });
  }
}
