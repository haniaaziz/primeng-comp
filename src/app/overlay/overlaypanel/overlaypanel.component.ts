import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { Product } from '../../../domain/product';
import { ProductService } from '../../../services/productservice';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { OverlayPanel, OverlayPanelModule } from 'primeng/overlaypanel';


interface TableRowSelectEvent {
    originalEvent?: Event;
    data?: any;
    type?: string;
    index?: number;
}

@Component({
  selector: 'app-overlaypanel',
  standalone: true,
  imports: [OverlayPanelModule, ToastModule, TableModule, ButtonModule],
  templateUrl: './overlaypanel.component.html',
  styleUrl: './overlaypanel.component.css',
      providers: [MessageService, ProductService]

})
export class OverlaypanelComponent implements OnInit {

    constructor(private productService: ProductService, private messageService: MessageService, private cdr: ChangeDetectorRef) {}
      products: Product[] = [];  

    selectedProduct: Product | null = null;

    ngOnInit() {
        this.productService.getProductsSmall().then((products) => {
            this.products = products;
            this.selectedProduct = products[0]|| null;
            this.cdr.markForCheck()
        });
    }

    onRowSelect(event: TableRowSelectEvent, op: OverlayPanel) {
        this.messageService.add({ severity: 'info', summary: 'Product Selected', detail: event.data.name });
        op.hide();
    }
}
