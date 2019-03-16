import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MMatchesComponent } from './m-matches.component';

describe('MMatchesComponent', () => {
  let component: MMatchesComponent;
  let fixture: ComponentFixture<MMatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MMatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
