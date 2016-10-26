import { RedditAppAngular2Page } from './app.po';

describe('reddit-app-angular2 App', function() {
  let page: RedditAppAngular2Page;

  beforeEach(() => {
    page = new RedditAppAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
