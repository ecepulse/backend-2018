import { AppPage } from './app.po';

describe('angular5-firebase-auth App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
***REMOVED***);

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
***REMOVED***);
});
