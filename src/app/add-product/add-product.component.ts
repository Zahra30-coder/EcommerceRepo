import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EcomService } from '../service/ecom.service';
import { product } from '../datatype';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  
  productName: string = '';
  image: any = '';
  price: number = 0;
  desc: string = '';
  color: string = '';
  message:string|undefined = '';

  public productCategory: any = [
    { value: 'Electronics', label: 'Electronics' },
    { value: 'MobilePhones', label: 'Mobile Phones' },
    { value: 'Fashion', label: 'Fashion and Lifestyle' },
  ];

  constructor(private service: EcomService) { }

  ngOnInit(): void {
  }

  sub(addProductForm: NgForm): void {
    const data: product = {
      productCategory: this.productCategory,
      productName: this.productName,
      image: this.image,
      desc: this.desc,
      color: this.color,
      price: this.price,
      id: ''
    };

    this.service.add(data).subscribe({
      next: (successResponse: product) => {
        console.log('Product added successfully:', successResponse);
        addProductForm.reset(); // Use reset() instead of resetForm()
        this.resetForm();
      },
      error: (errorResponse: any) => {
        console.error('Error adding product:', errorResponse);
      }
    });
  }

  // Resetting the form
  resetForm(): void {
    this.productCategory = '';
    this.productName = '';
    this.image = '';
    this.price = 0;
    this.desc = '';
    this.color = '';
  }

  submit(data: product) {
    this.service.add(data).subscribe((result) => {
      console.warn(result);
      if (result) {
        this.message = 'Product is added successfully';
      }
    });

    setTimeout(() => {
      this.message=undefined
    }, 3000);
  }
}

