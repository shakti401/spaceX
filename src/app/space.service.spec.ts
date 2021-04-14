/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SpaceService } from './space.service';

describe('Service: Space', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpaceService]
    });
  });

  it('should ...', inject([SpaceService], (service: SpaceService) => {
    expect(service).toBeTruthy();
  }));
});
