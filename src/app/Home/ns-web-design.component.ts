import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../Table/table.component';
import { CarouselComponent } from '../Carousel/carousel.component';

@Component({
  selector: 'app-ns-web-design',
  standalone: true,
  imports: [CommonModule, TableComponent, CarouselComponent],
  templateUrl: './ns-web-design.component.html',
  styleUrl: './ns-web-design.component.scss',
})
export class NsWebDesignComponent {}
