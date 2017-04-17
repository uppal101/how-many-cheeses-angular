import { HowManyCheesesPage } from './app.po';

describe('how-many-cheeses App', () => {
  let page: HowManyCheesesPage;

  beforeEach(() => {
    page = new HowManyCheesesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
