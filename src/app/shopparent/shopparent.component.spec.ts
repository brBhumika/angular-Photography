import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopparentComponent } from './shopparent.component';

describe('ShopparentComponent', () => {
  let component: ShopparentComponent;
  let fixture: ComponentFixture<ShopparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopparentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
