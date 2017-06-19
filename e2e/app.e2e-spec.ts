import { ClashStatsPage } from './app.po';

describe('clash-stats App', () => {
  let page: ClashStatsPage;

  beforeEach(() => {
    page = new ClashStatsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
