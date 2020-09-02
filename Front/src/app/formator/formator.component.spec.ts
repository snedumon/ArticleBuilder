import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatorComponent } from './formator.component';

describe('FormatorComponent', () => {
  let component: FormatorComponent;
  let fixture: ComponentFixture<FormatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
