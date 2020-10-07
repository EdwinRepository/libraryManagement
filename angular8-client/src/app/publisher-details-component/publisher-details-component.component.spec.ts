import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherDetailsComponentComponent } from './publisher-details-component.component';

describe('PublisherDetailsComponentComponent', () => {
  let component: PublisherDetailsComponentComponent;
  let fixture: ComponentFixture<PublisherDetailsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublisherDetailsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublisherDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
