import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaussureComponent } from './chaussure.component';

describe('ChaussureComponent', () => {
  let component: ChaussureComponent;
  let fixture: ComponentFixture<ChaussureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChaussureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaussureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
