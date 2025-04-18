import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../services/product.service';
import {FormsModule} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {NgClass, NgIf, UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-buy',
  imports: [
    FormsModule,
    NgIf,
    NgClass,
    UpperCasePipe
  ],
  templateUrl: './buy.component.html',
  styleUrl: './buy.component.css'
})
export class BuyComponent implements OnInit {
  productId!: number;
  product!: Product;
  order: Order = {} as Order;

  msg : string = '';

  ngOnInit() {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProductById(this.productId).subscribe({
      next: (response) => {
        this.product = response;
        console.log(response);
      },
      error: (err) => {
        console.error("Error fetching product:", err);
      }
    })
  }

  confirmOrder() {
    this.order.productId = this.productId;
    this.order.price = this.product.price;
    this.order.longitude = 0; // Replace with actual longitude
    this.order.latitude = 0; // Replace with actual latitude
    this.msg = '';
    console.log(this.order);
    this.http.post<Response>('http://localhost:8087/api/orders/create', this.order).subscribe({
      next: (response) => {
        this.msg = response.message;
        console.log(response);
      },
      error: (err) => {
        console.error("Error placing order:", err);
        this.msg = "Failed to place order.";
      }
    });

  }

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private http: HttpClient) {
  }
}

interface Product {
  id: number;
  code: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

interface Order{
  productId: number;
  customerEmail: string;
  quantity: number;
  price: number;
  cardNumber: string;
  couponCode: string;
  longitude: number;
  latitude: number;
}

interface Response {
  message: string;
}
