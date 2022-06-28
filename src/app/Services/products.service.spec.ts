import { TestBed } from '@angular/core/testing';

import { ProductsService } from '../Services/products.service';

describe('ServiceProductsService', () => {
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
