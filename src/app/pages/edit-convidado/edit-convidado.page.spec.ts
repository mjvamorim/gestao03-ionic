import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditConvidadoPage } from './edit-convidado.page';

describe('EditConvidadoPage', () => {
  let component: EditConvidadoPage;
  let fixture: ComponentFixture<EditConvidadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditConvidadoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditConvidadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
