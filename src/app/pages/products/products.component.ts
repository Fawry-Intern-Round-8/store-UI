import { Component } from '@angular/core';
import {ProductCardComponent} from '../../components/product-card/product-card.component';
import {Product} from '../../interfaces/product';
import {NgForOf} from '@angular/common';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-products',
  imports: [
    ProductCardComponent,
    NgForOf
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: Product[] = []
  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.getProducts().
    subscribe({
      next: (response) => {
        this.products = response;
        console.log(response);
      },
      error: (err) => {
        console.error("Error fetching products:", err);
      }
    })
  }
}
