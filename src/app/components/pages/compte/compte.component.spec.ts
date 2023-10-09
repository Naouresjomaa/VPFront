import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteComponent } from './compte.component';

describe('CompteComponent', () => {
  let component: CompteComponent;
  let fixture: ComponentFixture<CompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
function showPopup(): void {
  const popup: HTMLElement | null = document.getElementById('popup');
  if (popup) {
      popup.style.display = 'block';
  }
}

function hidePopup(): void {
  const popup: HTMLElement | null = document.getElementById('popup');
  if (popup) {
      popup.style.display = 'none';
  }
}
