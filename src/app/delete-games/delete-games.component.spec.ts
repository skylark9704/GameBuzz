import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteGamesComponent } from './delete-games.component';

describe('DeleteGamesComponent', () => {
  let component: DeleteGamesComponent;
  let fixture: ComponentFixture<DeleteGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
