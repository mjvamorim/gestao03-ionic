import { TestBed } from '@angular/core/testing';

import { ConvidadosService } from './convidados.service';

describe('ConvidadosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConvidadosService = TestBed.get(ConvidadosService);
    expect(service).toBeTruthy();
  });
});
