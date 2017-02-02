import { HowMuchCryptoValuePage } from './app.po';

describe('how-much-crypto-value App', function() {
  let page: HowMuchCryptoValuePage;

  beforeEach(() => {
    page = new HowMuchCryptoValuePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
