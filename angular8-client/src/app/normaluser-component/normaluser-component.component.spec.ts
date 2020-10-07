import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormaluserComponentComponent } from './normaluser-component.component';

describe('NormaluserComponentComponent', () => {
  let component: NormaluserComponentComponent;
  let fixture: ComponentFixture<NormaluserComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormaluserComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormaluserComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
