import { Hw10Plun1Page } from './app.po';

describe('hw10-plun1 App', () => {
  let page: Hw10Plun1Page;

  beforeEach(() => {
    page = new Hw10Plun1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
