import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Iproducts } from '../models/Iproducts';

@Injectable({
  providedIn: 'root'
})
export class BackendMockService {

  // Mock Database [Private]
  #productsList = [{
    id: "101",
    img: 'https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/tile/Apple-iPhone-16-Pro-hero-geo-240909-lp.jpg.news_app_ed.jpg',
    title: "Iphone 16 pro max",
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, necessitatibus.',
    price: '1800$'
  },
  {
    id: "102",
    img: 'https://sm.mashable.com/mashable_me/photo/default/images-14_cwd2.jpg',
    title: "Macbook Pro",
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    price: '1500$'
  },
  {
    id: "103",
    img: 'https://www.cnet.com/a/img/resize/4c3123cb7fac270d16fd9feed2a7ae74a346a76c/hub/2022/10/26/a263a8c4-1a8b-426d-b98d-616b816ce42c/ipad-pro-m2-2022-keyboard.jpg?auto=webp&width=1200',
    title: "Ipad pro M3",
    description: 'Lorem ipsum dolor, sit amet.',
    price: '1000$'
  },
  ]


  constructor() { }


  // semulate Backend Call to get all the list
  getProducts(): Observable<Iproducts[]> {
    return of(this.#productsList);
  }

  // semulate Backend Call to get item from the list
  getProductById(id: string) {

    const product = this.#productsList.find(product => product.id === id);
    return of(product);

  }
}
