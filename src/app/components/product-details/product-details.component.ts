import { Component, OnDestroy, OnInit } from '@angular/core';
import { BackendMockService } from '../../services/backend-mock.service';
import { Subject, takeUntil } from 'rxjs';
import { Iproducts } from '../../models/Iproducts';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  protected ngUnsubscribe: Subject<void> = new Subject<void>();
  product!: Iproducts;
  id!: string;
  constructor(private route: ActivatedRoute, private productsService: BackendMockService) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(paramsId => {
      this.id = paramsId['id'];
      this.getProduct(this.id);
    });
  }

  // Get Product Details
  getProduct(productId: string) {
    this.productsService.getProductById(productId).pipe(takeUntil(this.ngUnsubscribe)).subscribe((res: any) => {
      this.product = res;
      console.log(this.product);

    })
  }


  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}

