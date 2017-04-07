import { XFilesPage } from './app.po';

describe('x-files App', () => {
  let page: XFilesPage;

  beforeEach(() => {
    page = new XFilesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
