import { PianoPage } from './app.po';

describe('piano App', function() {
  let page: PianoPage;

  beforeEach(() => {
    page = new PianoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
