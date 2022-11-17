import { TestBed } from '@angular/core/testing';

import { ContraseñasService } from './contraseñas.service';

describe('ContraseñasService', () => {
  let service: ContraseñasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContraseñasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
