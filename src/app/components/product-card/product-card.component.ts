import {Component, Input} from '@angular/core';
import {Product} from '../../interfaces/product';
import {RouterLink} from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product!: Product;
}
