import azOSEDevPage from '../pages/azose.dev.page';
const chai = require('chai');
chai.use(require('chai-sorted'));

describe('Azure DevOps Test', () => {
  it('should see the openshift logo', () => {
    chai.expect(azOSEDevPage.open().isLogoPresent()).to.be.true;
  });
});
