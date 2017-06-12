import { browser, by, element } from 'protractor';

export class Hw10Plun1Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
