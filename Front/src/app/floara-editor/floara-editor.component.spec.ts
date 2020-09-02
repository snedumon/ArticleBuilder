import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloaraEditorComponent } from './floara-editor.component';

describe('FloaraEditorComponent', () => {
  let component: FloaraEditorComponent;
  let fixture: ComponentFixture<FloaraEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloaraEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloaraEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
