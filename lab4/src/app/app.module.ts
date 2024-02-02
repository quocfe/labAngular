import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { ProductListComponent } from './components/productList/productList.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { StarComponent } from './components/star/star.component';
import { ProductdetailComponent } from './components/productdetail/productdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    ProductdetailComponent,
    HomeComponent,
    StarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
