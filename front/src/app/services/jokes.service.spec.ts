import { TestBed } from '@angular/core/testing';

import { JokesService } from './jokes.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('JokesService', () => {
  let service: JokesService;

  // use beforeEach to create a new instance of the service before each test thanks to TestBed
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [JokesService],
    });
    service = TestBed.get(JokesService);
  });

  // use it to test that the service is created
  it('should be created', () => {
    expect(service).toBeTruthy();
    // Note: no need here to create a fixture for the component (i.e. a test environment for the component) because the service is not a component
  });
});
