import { Component, inject } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../catalog/produit.service';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrl: './promotions.component.css'
})
export class PromotionsComponent {
  products: any;
  filter: string = '';

  constructor(
    private cartSvc: CartService,
    private productSvc: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.productSvc.getProducts().subscribe((products: any) => {
      this.products = products;
    });
    this.route.queryParams.subscribe((params) => {
      this.filter = params['filter'] ?? '';
    })
  }

  addToCart(product: IProduct) {
    this.cartSvc.add(product);
    this.router.navigate(['/cart']);
  }

  getFilteredProductsDiscount() {
    return this.products.filter((product: any) => {
      return (this.filter === '' || product.category === this.filter) && product.discount > 0;
    });
  }
  

}
