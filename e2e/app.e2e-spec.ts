import { HowMuchCryptoValuePage } from './app.po';

describe('how-much-crypto-value App', () => {
  let page: HowMuchCryptoValuePage;

  beforeEach(() => {
    page = new HowMuchCryptoValuePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
