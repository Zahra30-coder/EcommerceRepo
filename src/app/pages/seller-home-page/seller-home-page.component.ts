import { Component, OnInit } from '@angular/core';
import { EcomService } from '../../service/ecom.service';
import { product } from '../../datatype';
// import { faEdit } from '@fortawesome/fontawesome-free';
// import { faTrash } from '@fortawesome/fontawesome-free';


@Component({
  selector: 'app-seller-home-page',
  templateUrl: './seller-home-page.component.html',
  styleUrl: './seller-home-page.component.css'
})
export class SellerHomePageComponent implements OnInit {

  productList:undefined | product[]
  productMessage:undefined|string
  // iconD = faTrash
  // iconE = faEdit

  constructor(private service: EcomService) { }

  ngOnInit(): void {
    this.service.get().subscribe((result)=>{
      console.warn(result)

      this.productList = result as product[]

      if(result){
        this.productList = result
      }
    })
    
  }

  deleteProduct(id:any){
    console.warn("test id", id)

    this.service.delete(id).subscribe((result) =>{
      console.warn(result)

      if (result){
        this.productMessage = "Product is deleted."
        this.list()
        //renders the table without the deleted item
      }
    })

    setTimeout(() => {
      this.productMessage=undefined
    }, 3000);
  }

  list(){
    this.service.get().subscribe((result)=>{
      console.warn(result)

      if(result){
        this.productList = result
      }
    })
  }
}



