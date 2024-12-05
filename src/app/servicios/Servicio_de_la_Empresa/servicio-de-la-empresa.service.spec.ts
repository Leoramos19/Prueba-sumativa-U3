import { TestBed } from '@angular/core/testing';

import { ServicioDeLaEmpresaService } from './servicio-de-la-empresa.service';

describe('ServicioDeLaEmpresaService', () => {
  let service: ServicioDeLaEmpresaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioDeLaEmpresaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
