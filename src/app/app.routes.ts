import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/products-list',
        pathMatch: 'full'
    },
    {
        path: 'products-list',
        loadComponent: () => import("./components/products-list/products-list.component").then((c) => c.ProductsListComponent)
    },
    {
        path: 'products-details/:id',
        loadComponent: () => import("./components/product-details/product-details.component").then((c) => c.ProductDetailsComponent)
    }
];
