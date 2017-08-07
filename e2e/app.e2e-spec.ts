import { RoadTripPage } from './app.po';

describe('road-trip App', () => {
  let page: RoadTripPage;

  beforeEach(() => {
    page = new RoadTripPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
