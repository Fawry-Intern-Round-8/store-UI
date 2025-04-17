import { Component } from '@angular/core';
import {ProductCardComponent} from '../../components/product-card/product-card.component';
import {Product} from '../../interfaces/product';
import {NgForOf} from '@angular/common';

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
  products: Product[] = [
    {
      name: 'Product 1',
      description: 'Description of Product 1',
      price: 100,
      image: 'https://res.cloudinary.com/dwxhk8zlh/image/upload/v1742318648/p7jtylegp8yq4vcxanr0.jpg',
      quantity: 1,
      id: 1
    },
    {
      name: 'Product 2',
      description: 'Description of Product 2',
      price: 10,
      image: 'https://res.cloudinary.com/dwxhk8zlh/image/upload/v1742318648/p7jtylegp8yq4vcxanr0.jpg',
      quantity: 2,
      id: 2
    },
    {
      name: 'Product 13',
      description: 'Description of Product 13',
      price: 100,
      image: 'https://res.cloudinary.com/dwxhk8zlh/image/upload/v1742318648/p7jtylegp8yq4vcxanr0.jpg',
      quantity: 11,
      id: 13
    },
    {
      name: 'Product 211',
      description: 'Description of Product 2fsdfe',
      price: 102,
      image: 'https://res.cloudinary.com/dwxhk8zlh/image/upload/v1742318648/p7jtylegp8yq4vcxanr0.jpg',
      quantity: 2,
      id: 211
    }
  ]
  constructor() {
    // this.products = this.products.getProducts();
  }

}
