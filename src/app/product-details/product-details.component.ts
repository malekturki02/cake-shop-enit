import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  @Input() product!:IProduct;
  @Output() buy= new EventEmitter();

  getImageUrl(product: IProduct) {
    if (!product) return '';
    return '/assets/images/products/' + product.imageName;
  }

  addTocart(product: IProduct){
   
    console.log('product ${product.name} added to cart');
  }
 buyButtonClicked(product:IProduct){
    this.buy.emit();
  }
}
