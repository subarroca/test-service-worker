import { TestServiceWorkerPage } from './app.po';

describe('test-service-worker App', function() {
  let page: TestServiceWorkerPage;

  beforeEach(() => {
    page = new TestServiceWorkerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
