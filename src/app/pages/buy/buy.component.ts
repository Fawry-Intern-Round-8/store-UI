import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../../interfaces/product';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-buy',
  imports: [
    NgIf
  ],
  templateUrl: './buy.component.html',
  styleUrl: './buy.component.css'
})
export class BuyComponent implements OnInit {
  productId!: number;
  product!: Product;

  ngOnInit() {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));

    // For now, use dummy data
    this.product = {
      id: this.productId,
      name: 'Sample Product',
      description: 'Sample description',
      price: 99.99,
      image: 'https://res.cloudinary.com/dwxhk8zlh/image/upload/v1742318648/p7jtylegp8yq4vcxanr0.jpg',
      quantity: 10,
    };
  }

  constructor(private route: ActivatedRoute) {}
}
