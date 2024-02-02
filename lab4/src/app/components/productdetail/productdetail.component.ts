import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import productData from 'src/app/data/product';
import { IProduct } from 'src/app/entities/product';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css'],
})
export class ProductdetailComponent implements OnInit {
  productId!: number;
  product!: any;
  constructor(private Route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.productId = +this.Route.snapshot.params['id'];
    this.product = productData.find(
      (item) => item.productId === this.productId
    );
    console.log(this.product);
  }

  onBack() {
    this.router.navigate(['products']);
  }
}
