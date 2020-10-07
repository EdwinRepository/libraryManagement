import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksCatalogueComponentComponent } from './books-catalogue-component.component';

describe('BooksCatalogueComponentComponent', () => {
  let component: BooksCatalogueComponentComponent;
  let fixture: ComponentFixture<BooksCatalogueComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksCatalogueComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksCatalogueComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
