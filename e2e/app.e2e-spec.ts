import { SVPage } from './app.po';

describe('sv App', function() {
  let page: SVPage;

  beforeEach(() => {
    page = new SVPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
