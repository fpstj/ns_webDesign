import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

export interface Product {
  title: string;
  id: number;
  description: string;
  images: string;
  price: string;
  brand: string;
  category: string;
  rating: number;
  discountPercentage: number;
}

@Injectable({
  providedIn: 'root',
})
export class CarouselService {
  http = inject(HttpClient);

  getCarousel() {
    return this.http.get<Product>('https://dummyjson.com/products/1');
  }
}
