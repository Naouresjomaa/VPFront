import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopPanierComponent } from './shop-panier.component';

describe('ShopPanierComponent', () => {
  let component: ShopPanierComponent;
  let fixture: ComponentFixture<ShopPanierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopPanierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopPanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
