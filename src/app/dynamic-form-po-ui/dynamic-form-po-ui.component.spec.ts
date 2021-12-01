import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormPoUiComponent } from './dynamic-form-po-ui.component';

describe('DynamicFormPoUiComponent', () => {
  let component: DynamicFormPoUiComponent;
  let fixture: ComponentFixture<DynamicFormPoUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicFormPoUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormPoUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
