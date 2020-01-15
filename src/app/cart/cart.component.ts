import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';/**จับelementของform input */

import { CartService } from '../cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;

  constructor(
    private cartService : CartService,
    private formBuilder : FormBuilder
  ) { }

  ngOnInit() {
    this.items = this.cartService.getItems();

    this.checkoutForm = this.formBuilder.group({/**ประกาศสำหรับรับค่าจาก form  */
      name : '',
      address : ''
    });
  }

  onSubmit(customerData){/**เพื่อsubmit form */
    console.log("Your order has been submitted",customerData);
    //alert("Your order has been submitted"+customerData);

    this.items = this.cartService.clearCart();//clear ของในตะกร้า
    this.checkoutForm.reset();//reset form
  }

}
