import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';
import { Product } from './product-list/Product';
/*
*maneja la logica del carito de compras
*
*/
@Injectable({
  providedIn: 'root'
})
export class TomPizzaCartService {

  private _cartList: Product[] = [];
  cartList: BehaviorSubject<Product[]> = new BehaviorSubject(this._cartList);
  //public updateStock$ = this.cartList.asObservable();

  private _stock: Product[] = [];
  private stock: Subject<Product[]> = new Subject();
  public stock$ = this.stock.asObservable();



  constructor() { }

  addToCart(product: Product) {

    let item = this._cartList.find((p1) => p1.name == product.name);
    if (!item) {

      this._cartList.push({ ...product }); //clona el objeto

    } else {
      item.quantity += product.quantity;
    }
    console.log(this._cartList);

    this.cartList.next(this._cartList);//equivalente al emmit del evento

  }

  //remove

  removeToCart(index: number, product: Product) {
    this._stock.push(product);
    let item = this._stock.find((p1) => p1.name == product.name);
    if (item) {
      this._cartList.splice(index, 1);

      this.stock.next(this._stock);
      this._stock = [];
    }
  }

  calcTotalPrice(): number {
    return this._cartList.reduce((total, prod) => total += prod.price * prod.quantity, 0)
  }

}
