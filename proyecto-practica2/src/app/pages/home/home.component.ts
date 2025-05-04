import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  uniqueProduct?: Product;
  constructor(private _productService: ApiService) {
    this._productService.getProductById(1).subscribe((product) => {
      this.uniqueProduct = product;
      console.log(this.uniqueProduct)
    });
  }

}
