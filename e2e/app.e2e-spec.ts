import { StaggeringPage } from './app.po';

describe('staggering App', () => {
  let page: StaggeringPage;

  beforeEach(() => {
    page = new StaggeringPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
