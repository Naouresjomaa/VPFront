import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GastronomieComponent } from './gastronomie.component';

describe('GastronomieComponent', () => {
  let component: GastronomieComponent;
  let fixture: ComponentFixture<GastronomieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GastronomieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GastronomieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
