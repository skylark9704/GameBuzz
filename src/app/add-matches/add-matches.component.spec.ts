import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMatchesComponent } from './add-matches.component';

describe('AddMatchesComponent', () => {
  let component: AddMatchesComponent;
  let fixture: ComponentFixture<AddMatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
