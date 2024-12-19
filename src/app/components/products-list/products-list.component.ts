import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendMockService } from '../../services/backend-mock.service';
import { Subject, takeUntil } from 'rxjs';
import { Iproducts } from '../../models/Iproducts';
import { NgForOf, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [NgForOf, FormsModule, NgIf],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent implements OnInit, OnDestroy {
  protected ngUnsubscribe: Subject<void> = new Subject<void>();
  products!: Iproducts[];
  filterText = '';
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

  // Sort products
  sortProducts(e: any): void {
    let sortOption = e.target.value;
    let sortedList: Iproducts[] = [...this.products];
    switch (sortOption) {
      case 'name-asc':
        sortedList.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'name-desc':
        sortedList.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case 'price-asc':
        sortedList.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        sortedList.sort((a, b) => b.price - a.price);
        break;
      default:
        return
    }
    this.products = sortedList;
  }

  // Filter products by name
  filterProducts(): void {
    const lowerCaseFilter = this.filterText.toLowerCase();
    this.products = this.products.filter((product: Iproducts) =>
      product.title.toLowerCase().includes(lowerCaseFilter)
    );
    if (lowerCaseFilter.length === 0) this.getProductsList()
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
