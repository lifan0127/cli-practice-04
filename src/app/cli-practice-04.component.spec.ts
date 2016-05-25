import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { CliPractice04AppComponent } from '../app/cli-practice-04.component';

beforeEachProviders(() => [CliPractice04AppComponent]);

describe('App: CliPractice04', () => {
  it('should create the app',
      inject([CliPractice04AppComponent], (app: CliPractice04AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'cli-practice-04 works!\'',
      inject([CliPractice04AppComponent], (app: CliPractice04AppComponent) => {
    expect(app.title).toEqual('cli-practice-04 works!');
  }));
});
