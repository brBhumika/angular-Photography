import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopcartlistComponent } from './shopcartlist.component';

describe('ShopcartlistComponent', () => {
  let component: ShopcartlistComponent;
  let fixture: ComponentFixture<ShopcartlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopcartlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopcartlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
