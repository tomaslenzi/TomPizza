import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Product } from './product-list/Product';

const URL = 'https://636beac47f47ef51e13de5d8.mockapi.io/api/products'
let bebida: string = "bebida";
const DRINK: string = "bebida";
let texto: string = "asd";
@Injectable({
  providedIn: 'root'
})
export class TompizzaDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Product[]>{
    
    return this.http.get<Product[]>(URL)
            .pipe(map(products=>products.filter(product=>product.type=="pizza")),
              tap((products: Product[]) => products.forEach(product=>product.quantity = 0))
            );
  }

  public getByType(): Observable<Product[]>{
    
    return this.http.get<Product[]>(URL)
            .pipe(map(products=>products.filter(product=>product.type=="bebida")),
              tap((products: Product[]) => products.forEach(product=>product.quantity = 0))
            );
  }



}
