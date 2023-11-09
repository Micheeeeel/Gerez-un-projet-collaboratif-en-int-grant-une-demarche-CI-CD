import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { JokesService } from './services/jokes.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
  // use beforeEach to create a new instance of the service before each test thanks to TestBed
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // declare AppComponent as the component under test
      declarations: [AppComponent],
      imports: [HttpClientTestingModule],
      providers: [JokesService],
    }).compileComponents();

    // Note: no need to create an instance of the service here because it is already done in the providers array so that it can be injected in the component
  });

  it('should create the app', () => {
    // create a fixture for the component (i.e. a test environment for the component)
    const fixture = TestBed.createComponent(AppComponent);
    // get the component instance from the fixture
    const app = fixture.componentInstance;
    // use expect to verify that the component is created
    expect(app).toBeTruthy();
  });

  // it should test the function getRandomJoke()
  it('should test the function getRandomJoke()', () => {
    // create a fixture for the component (i.e. a test environment for the component)
    const fixture = TestBed.createComponent(AppComponent);
    // get the component instance from the fixture
    const app = fixture.componentInstance;
    // use spyOn to spy on the service method getRandomJoke()
    spyOn(app['jokesService'], 'getRandomJoke');
    // call the function getRandomJoke()
    app.getRandomJoke();
    // use expect to verify that the service method getRandomJoke() has been called
    expect(app['jokesService'].getRandomJoke).toHaveBeenCalled();
  });
});
