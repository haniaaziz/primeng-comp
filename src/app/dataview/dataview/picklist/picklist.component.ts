import { ChangeDetectorRef, Component } from '@angular/core';
import { PickListModule } from 'primeng/picklist';
import { ProductService } from '../../../../services/productservice';
import { Product } from '../../../../domain/product';


@Component({
  selector: 'app-picklist',
  standalone: true,
  imports: [PickListModule],
  templateUrl: './picklist.component.html',
  styleUrl: './picklist.component.css',
  providers: [ProductService]

})
export class PicklistComponent {
 sourceProducts!: Product[];

    targetProducts!: Product[];

    constructor(
      private carService: ProductService,
      private cdr: ChangeDetectorRef
    ) {}

    ngOnInit() {
        this.carService.getProductsSmall().then(products => {
            this.sourceProducts = products;
            this.cdr.markForCheck();
        });
        this.targetProducts = [];
    }
}
