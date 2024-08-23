import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Product } from '../../../../domain/product';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ProductService } from '../../../../services/productservice';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { TableRowCollapseEvent, TableRowExpandEvent } from 'primeng/table';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table2',
  standalone: true,
  imports: [TableModule, TagModule, ToastModule, RatingModule, ButtonModule, CommonModule,FormsModule],
  templateUrl: './table2.component.html',
  styleUrl: './table2.component.css',
   providers: [ProductService, MessageService]

})
export class Table2Component implements OnInit{
    products!: Product[];

    expandedRows = {};

    constructor(private productService: ProductService, private messageService: MessageService) {}

    ngOnInit() {
        this.productService.getProductsWithOrdersSmall().then((data) => (this.products = data));
    }

   expandAll() {
    this.expandedRows = this.products.reduce((acc, p) => {
        const id = p.id;
        if (id !== undefined) {
            acc[id] = true;
        }
        return acc;
    }, {} as { [key: string]: boolean });
}

    collapseAll() {
        this.expandedRows = {};
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

    getStatusSeverity(status: string): "success" | "warning" | "danger" | undefined {
        switch (status) {
            case 'PENDING':
                return 'warning';
            case 'DELIVERED':
                return 'success';
            case 'CANCELLED':
                return 'danger';
                default:
            return undefined; 
        }
    }

    onRowExpand(event: TableRowExpandEvent) {
        this.messageService.add({ severity: 'info', summary: 'Product Expanded', detail: event.data.name, life: 3000 });
    }

    onRowCollapse(event: TableRowCollapseEvent) {
        this.messageService.add({ severity: 'success', summary: 'Product Collapsed', detail: event.data.name, life: 3000 });
    }
}

