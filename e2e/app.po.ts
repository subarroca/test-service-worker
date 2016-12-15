import { browser, element, by } from 'protractor';

export class TestServiceWorkerPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('kw-root h1')).getText();
  }
}
