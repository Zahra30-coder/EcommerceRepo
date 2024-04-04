
import { Component, Inject, inject, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NgbOffcanvas, OffcanvasDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownConfig, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-cat',
  templateUrl: './product-cat.component.html',
  styleUrl: './product-cat.component.css'
})
export class ProductCatComponent implements OnInit{
	apiUrl = 'https://api.unsplash.com/photos/random?query=product&count=10&client_id=elAHu8df7MgvkOCcA-yxdEUwAyeQcOE1lgRljUrQHGo';
	
	prod: any;
	private modalService = inject(NgbModal);

	
	openLg(content: TemplateRef<any>) {
		this.modalService.open(content, { size: 'lg' });
	}
	openXl(content: TemplateRef<any>) {
		this.modalService.open(content, { size: 'xl' });
	  }
  
	constructor(config: NgbDropdownConfig, private http: HttpClient) {
	  // customize default values of dropdowns used by this component tree
	  config.placement = 'top-start';
	  config.autoClose = false;
	}
  
	ngOnInit(): void {
	  this.http.get(this.apiUrl + '&count=1').subscribe((data) => {
		this.prod = data;
	  });
	}

  // OFFCANVAS
	private offcanvasService = inject(NgbOffcanvas);
	closeResult = '';

	open(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { ariaLabelledBy: 'offcanvas-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

	private getDismissReason(reason: any): string {
		switch (reason) {
			case OffcanvasDismissReasons.ESC:
				return 'by pressing ESC';
			case OffcanvasDismissReasons.BACKDROP_CLICK:
				return 'by clicking on the backdrop';
			default:
				return `with: ${reason}`;
		}
	}

	// COLLAPSE FUNCTIONALITY
	isCollapsed1 = true;
	isCollapsed2 = true; // Used for "KIDS" section
	isCollapsed3 = true; // Used for "BRANDS" section

	// Toggle function for different collapse sections
  toggleCollapse(section: number): void {
    if (section === 1) {
      this.isCollapsed1 = !this.isCollapsed1;
    } else if (section === 2) {
      this.isCollapsed2 = !this.isCollapsed2;
    } else if (section === 3) {
      this.isCollapsed3 = !this.isCollapsed3;
    }
  }
}
