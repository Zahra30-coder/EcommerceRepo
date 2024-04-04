import { Component } from '@angular/core';

import { ActivatedRoute, Route } from '@angular/router';
import { Inject } from '@angular/core';
import { EcomService } from '../service/ecom.service';
import { Router } from '@angular/router';
import { product } from '../datatype';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  searchResult: undefined| product[];
  menuType: string = 'default';
  sellerName:string = "";

  constructor(
    private service: EcomService,
    private route: ActivatedRoute,
    private router: Router,

    @Inject(ActivatedRoute) public activatedRoute: ActivatedRoute,
    
  ) {}

  logout(){
    localStorage.removeItem('seller');
    this.router.navigate(['/']);
  }


    //this functions maps, the keyboard event to the console
    searchProduct(query:KeyboardEvent){
      if(query){
        const element = query.target as HTMLInputElement
        console.warn(element.value)
  
        this.service.searchProducts(element.value).subscribe(result =>{
          console.warn(result)
          //maps the entered keys to console
  
          this.searchResult = result
        })
      }
    }

}
