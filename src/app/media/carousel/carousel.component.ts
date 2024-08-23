import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { Product } from '../../../domain/product';
import { CarouselModule } from 'primeng/carousel';
import { ProductService } from '../../../services/productservice';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CarouselModule, ButtonModule, TagModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
      providers: [ProductService]

})
export class CarouselComponent implements OnInit{
     products: Product[] = [];  


    responsiveOptions: any[] = []; 

    constructor(private productService: ProductService) {}

     ngOnInit() {
        this.productService.getProductsSmall().then((products) => {
            this.products = products || [];  
        });

       this.responsiveOptions = [
            {
                breakpoint: '1199px',
                numVisible: 1,
                numScroll: 1
            },
            {
                breakpoint: '991px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '767px',
                numVisible: 1,
                numScroll: 1
            }
        ];
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
