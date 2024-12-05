import { TestBed } from '@angular/core/testing';

import { TecnicoProfesionalService } from './tecnico-profesional.service';

describe('TecnicoProfesionalService', () => {
  let service: TecnicoProfesionalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TecnicoProfesionalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
