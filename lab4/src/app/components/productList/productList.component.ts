import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IProduct } from 'src/app/entities/product';
import productData from './../../data/product';

@Component({
  selector: 'app-productList',
  templateUrl: './productList.component.html',
  styleUrls: ['./productList.component.css'],
})
export class ProductListComponent implements OnInit {
  productsList: IProduct[] = productData;

  _valueSearch: string = '';
  products: IProduct[] = [];
  showImage: boolean = false;
  message!: string;
  constructor() {}

  ngOnInit() {
    this.products = this.productsList;
  }

  get valueSearch(): string {
    return this._valueSearch;
  }

  set valueSearch(value: string) {
    // this.products = this.productsList.filter((item) =>
    //   item.productName.includes(this.valueSearch)
    // );

    this._valueSearch = value;
    this.products = this.valueSearch
      ? this.performFilter(this.valueSearch)
      : this.productsList;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.productsList.filter(
      (product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }
  handleRatingClicked(message: string): void {
    this.message = message;
  }
  handleImg(): void {
    this.showImage = !this.showImage;
  }
}
