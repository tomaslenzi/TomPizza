import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product-list/Product';
import { TomPizzaCartService } from '../tom-pizza-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartList$: Observable<Product[]>;
 

  constructor(private cart: TomPizzaCartService) { 
    this.cartList$=cart.cartList.asObservable();

  }

  ngOnInit(): void {
    
  }

  removeItem(index: number, product: Product): void{
    this.cart.removeToCart(index, product);
    console.log(index+"hola index")

  }
  
  calcTotal(){
    let total = 0;
    total += this.cart.calcTotalPrice();
    return total;
  }



}
