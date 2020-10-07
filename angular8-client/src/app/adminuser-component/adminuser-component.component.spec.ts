import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminuserComponentComponent } from './adminuser-component.component';

describe('AdminuserComponentComponent', () => {
  let component: AdminuserComponentComponent;
  let fixture: ComponentFixture<AdminuserComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminuserComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminuserComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
