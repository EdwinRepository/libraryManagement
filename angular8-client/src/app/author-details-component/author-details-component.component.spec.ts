import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorDetailsComponentComponent } from './author-details-component.component';

describe('AuthorDetailsComponentComponent', () => {
  let component: AuthorDetailsComponentComponent;
  let fixture: ComponentFixture<AuthorDetailsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorDetailsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
