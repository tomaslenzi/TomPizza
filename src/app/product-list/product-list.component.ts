import { Component, OnInit } from '@angular/core';
import { TomPizzaCartService } from '../tom-pizza-cart.service';
import { TompizzaDataService } from '../tompizza-data.service';
import { Product } from './Product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];


  constructor(
    private cart: TomPizzaCartService,
    private tomPizzaDataService: TompizzaDataService) {

  }



  ngOnInit(): void {
    this.tomPizzaDataService.getAll()
      .subscribe(products => this.products = products);

    this.cart.stock$.subscribe((data => {
      this.updateStock(data);
    }))

  }

  addToCart(product: Product): void {
    if (product.quantity > 0) {
      this.cart.addToCart(product);

    }
    product.stock -= product.quantity;
    product.quantity = 0;

  }

  maxReached(m: string) {
    console.log(m);
  }

  updateStock(data: Product[]) {

    this.products.forEach(element => {
      data.forEach(element2 => {
        if (element.name === element2.name) {
          element.stock = element2.stock;
        }
      })
    })
  }
}

