import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EcomService } from '../service/ecom.service';
import { product } from '../datatype';


@Component({
  selector: 'app-updatte-product',
  templateUrl: './updatte-product.component.html',
  styleUrl: './updatte-product.component.css'
})
export class UpdatteProductComponent implements OnInit{

  updateForm!: FormGroup;
  productData: product | undefined;

  productName: string = '';
  image: any = '';
  price: number = 0;
  desc: string = '';
  color: string = '';
  messageP: string | undefined = '';

  public productCategory: any = [
    { value: 'Electronics', label: 'Electronics' },
    { value: 'MobilePhones', label: 'Mobile Phones' },
    { value: 'Fashion', label: 'Fashion and Lifestyle' },
  ];

  currentParamsId: any;

  constructor(
    private service: EcomService,
    private route: ActivatedRoute,
    private router: Router,
    @Inject(ActivatedRoute) public activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    // Getting the product_id
    let productId = this.activatedRoute.snapshot.params['id']; //don't touch this, id
    console.warn(productId);
    
    // Check if productId is defined before using it
   
      this.currentParamsId = productId;
  
      this.service.getById(productId).subscribe((result) => {
        console.log(result);

      this.productData = result
  
        this.updateForm = this.fb.group({
          productCategory: [this.productData?.productCategory],
          productName: [this.productCategory.productName],
          image: [this.productData?.image],
          price: [this.productData?.price],
          desc: [this.productData?.desc],
          color: [this.productData?.color]
        });
      });
    
  }
  
  //ngForm
  // This function fetches data on the browser screen
  updateData(id: any) {
    console.log(id);

    if (id) {
      this.service.getById(id).subscribe({
        next: (successResponse: any) => {
          console.log('productData', successResponse);

          this.productData = successResponse;
          console.log('obj', this.productData);

          this.updateForm.patchValue({
            productCategory: this.productCategory?.productCategory.value,
            productName: this.productData?.productName,
            image: this.productData?.image,
            price: this.productData?.price,
            desc: this.productData?.desc,
            color: this.productData?.color
          });
        },
        error: (errorResponse) => {
          console.error('Error updating product:', errorResponse);
        }
      });
    } else {
      console.error('Invalid id:', id);
      // Handle the case where id is undefined or invalid
    }
  }

  updateProductData() {
    console.log("Update Product Data")

    this.service.update(this.currentParamsId, this.updateForm.value).subscribe({
      next: (successResponse: any) => {
        console.log('updateSuccess ....... !!!!', successResponse)

        if (successResponse) {
          this.messageP = 'Product has been updated.';
          setTimeout(() => {
            this.messageP = undefined;
          }, 3000);
        }

        this.updateForm.reset();
        this.router.navigate(['']);
      },
      error: (errorResponse) => {
        console.log(errorResponse)
      }
    })
  }

  submit() {
    console.log("Form Submitted...!!!");
    console.log("Form value:", this.updateForm.value);
    this.productData = this.updateForm.value;
    console.log("Submitted Data", this.productData);

  }
}

