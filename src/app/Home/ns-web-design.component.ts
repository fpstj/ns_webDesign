import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../Table/Table.component';

@Component({
  selector: 'app-ns-web-design',
  standalone: true,
  imports: [CommonModule, TableComponent],
  templateUrl: './ns-web-design.component.html',
  styleUrl: './ns-web-design.component.scss',
})
export class NsWebDesignComponent {}
