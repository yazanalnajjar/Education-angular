import { Component } from "@angular/core";

import { products } from "../products";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert("the product hsa been shared!");
  }

  onNotify() {
    window.alert("You will be notified when the product gose on sale");
  }
}
