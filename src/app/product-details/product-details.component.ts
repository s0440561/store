import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';//เพื่อดึงค่าproductมาแสดง
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product;//เพื่อนำไปใช้ต่อในหน้าhtml
  constructor(
    private route : ActivatedRoute,
    private cartService : CartService
    )  { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.product = products[+params.get('productId')];
    });
  }

  addToCart(product){
    window.alert("Your product has been add to the cart!");
    this.cartService.addToCart(product);
    alert(this.cartService.items.length);
  }

}
