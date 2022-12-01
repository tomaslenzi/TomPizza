import { Component, OnInit } from '@angular/core';

import { TomPizzaCartService } from '../tom-pizza-cart.service';
import { TompizzaDataService } from '../tompizza-data.service';
import { Product } from '../product-list/Product';

@Component({
  selector: 'app-tompizza-drinks',
  templateUrl: './tompizza-drinks.component.html',
  styleUrls: ['./tompizza-drinks.component.scss']
})
export class TompizzaDrinksComponent implements OnInit {

  products: Product[] = [];

  constructor(private cart: TomPizzaCartService,
    private tomPizzaDataService: TompizzaDataService) { }



  ngOnInit(): void {
    this.tomPizzaDataService.getByType()
      .subscribe(products => this.products = products);

    this.cart.stock$.subscribe((data => {
      this.updateStock(data);
    }));
  }

  /*
  *
  borrar despues para no repetir codigo
  */

  addToCart(product: Product): void {
    this.cart.addToCart(product);
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
