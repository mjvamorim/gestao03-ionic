import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvidadosPage } from './convidados.page';

describe('ConvidadosPage', () => {
  let component: ConvidadosPage;
  let fixture: ComponentFixture<ConvidadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvidadosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvidadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
