import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { ProductService } from '../../../../services/productservice';
import { Product } from '../../../../domain/product';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [TableModule, TagModule, RatingModule, ButtonModule, CommonModule,FormsModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
      providers: [ProductService]

})
export class TableComponent implements OnInit {
    products!: Product[];

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProductsMini().then((data) => {
            this.products = data;
        });
    }

  getSeverity(status: string): "success" | "warning" | "danger" | undefined {
    switch (status) {
        case 'INSTOCK':
            return 'success';
        case 'LOWSTOCK':
            return 'warning';
        case 'OUTOFSTOCK':
            return 'danger';
        default:
            return undefined; 
    }
    }
}