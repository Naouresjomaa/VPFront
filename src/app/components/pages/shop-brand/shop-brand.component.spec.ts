import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopBrandComponent } from './shop-brand.component';

describe('ShopBrandComponent', () => {
  let component: ShopBrandComponent;
  let fixture: ComponentFixture<ShopBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopBrandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
