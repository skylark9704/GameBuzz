import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMatchesComponent } from './delete-matches.component';

describe('DeleteMatchesComponent', () => {
  let component: DeleteMatchesComponent;
  let fixture: ComponentFixture<DeleteMatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteMatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
