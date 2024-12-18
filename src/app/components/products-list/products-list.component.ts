import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendMockService } from '../../services/backend-mock.service';
import { Subject, takeUntil } from 'rxjs';
import { Iproducts } from '../../models/Iproducts';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent implements OnInit, OnDestroy {
  protected ngUnsubscribe: Subject<void> = new Subject<void>();
  products!: Iproducts[];
  constructor(private router: Router, private productsService: BackendMockService) {

  }

  ngOnInit(): void {
    this.getProductsList();
  }

  // Get All Products
  getProductsList() {
    this.productsService.getProducts().pipe(takeUntil(this.ngUnsubscribe)).subscribe((res: Iproducts[]) => {
      this.products = res;
    })
  }


  navigateToDetails(prodId: string) {
    this.router.navigate(['products-details/', prodId]);
  }



  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
