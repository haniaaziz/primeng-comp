import { Component } from '@angular/core';
import { PaginatorModule } from 'primeng/paginator';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { SliderModule } from 'primeng/slider';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
      

interface PageEvent {
    first: number;
    rows: number;
    page: number;
    pageCount: number;
}


@Component({
  selector: 'app-paginators',
  standalone: true,
  imports: [CommonModule,PaginatorModule, ButtonModule, DividerModule, SliderModule, FormsModule],
  templateUrl: './paginators.component.html',
  styleUrl: './paginators.component.css'
})
export class PaginatorsComponent {
          first1: number = 0;

    rows1: number = 10;

    first2: number = 0;

    rows2: number = 10;

    first3: number = 0;

    rows3: number = 10;

    totalRecords: number = 120;

    options = [
        { label: 5, value: 5 },
        { label: 10, value: 10 },
        { label: 20, value: 20 },
        { label: 120, value: 120 }
    ];

   onPageChange1(event: any) {
    this.first1 = event.first as number;
    this.rows1 = event.rows as number;
}

onPageChange2(event: any) {
    this.first2 = event.first as number;
    this.rows2 = event.rows as number;
}

onPageChange3(event: any) {
    this.first3 = event.first as number;
    this.rows3 = event.rows as number;
}
}
