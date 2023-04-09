import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoisirComponent } from './loisir.component';

describe('LoisirComponent', () => {
  let component: LoisirComponent;
  let fixture: ComponentFixture<LoisirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoisirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoisirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
