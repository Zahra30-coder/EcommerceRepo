import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatteProductComponent } from './updatte-product.component';

describe('UpdatteProductComponent', () => {
  let component: UpdatteProductComponent;
  let fixture: ComponentFixture<UpdatteProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatteProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatteProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
