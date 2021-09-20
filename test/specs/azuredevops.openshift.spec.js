import azOSEDevPage from '../pages/azose.dev.page';

chai.use(require('chai-sorted'));

describe('Hotel Detail', () => {



  // should show availability of rooms after selecting a hotel from search results filter by stars
  it('should see the openshift logo', () => {
    chai.expect(azOSEDevPage.open().isLogoPresent()).to.be.true;
  });
});
