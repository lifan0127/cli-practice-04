import { CliPractice04Page } from './app.po';

describe('cli-practice-04 App', function() {
  let page: CliPractice04Page;

  beforeEach(() => {
    page = new CliPractice04Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('cli-practice-04 works!');
  });
});
