import { ShippingComponent } from "./shipping/shipping.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { ProductAlertsComponent } from "./product-alerts/product-alerts.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";

import { CartComponent } from "./cart/cart.component";

import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,

    RouterModule.forRoot([
      { path: "", component: ProductListComponent },
      { path: "products/:productId", component: ProductDetailsComponent },
      { path: "cart", component: CartComponent },
      { path: "shipping ", component: ShippingComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
