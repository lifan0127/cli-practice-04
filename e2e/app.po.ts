export class CliPractice04Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('cli-practice-04-app h1')).getText();
  }
}
