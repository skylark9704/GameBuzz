import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MOrdersComponent } from './m-orders.component';

describe('MOrdersComponent', () => {
  let component: MOrdersComponent;
  let fixture: ComponentFixture<MOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
