import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css'],
})
export class ManageProductComponent implements OnInit {
  productData!: FormGroup;
  constructor() {}

  // bài 4
  // ngOnInit(): void {
  //   this.productData = new FormGroup({
  //     code: new FormControl('123-321'),
  //     name: new FormControl(null),
  //     desc: new FormControl(null),
  //     price: new FormControl(null),
  //     evaluate: new FormControl(null),
  //     images: new FormControl(null),
  //   });
  // }

  ngOnInit(): void {
    this.productData = new FormGroup({
      code: new FormControl('123-321', Validators.required),
      name: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^(?!.*ma tuý)(?!.*hàng trắng).*$/i),
      ]),
      desc: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      evaluate: new FormControl(null, Validators.required),
      images: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    console.log(this.productData.value);
  }
}
