import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { CarouselService } from './carousel.service';
import { Product } from './carousel.service';

@Component({
  selector: 'app-carousel',
  standalone: true,
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  imports: [CommonModule],
})
export class CarouselComponent implements OnInit {
  product$!: Observable<Product>;

  constructor(private carouselService: CarouselService) {}

  ngOnInit(): void {
    this.product$ = this.carouselService
      .getCarousel()
      .pipe(tap((x) => console.log(x)));
  }
}
