import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersBookListComponent } from './users-book-list.component';

describe('UsersBookListComponent', () => {
  let component: UsersBookListComponent;
  let fixture: ComponentFixture<UsersBookListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersBookListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersBookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
