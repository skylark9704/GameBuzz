import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MGamesComponent } from './m-games.component';

describe('MGamesComponent', () => {
  let component: MGamesComponent;
  let fixture: ComponentFixture<MGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
