import Page from './page';

class AZOSEDevPage extends Page {
  get logo() {return $('#.logo');}
  open() {
    super.open('');
    return this;
  }

  isLogoPresent() {
    this.logo.waitForDisplayed({ timeout: 20000 });
    return this.logo.isExisting()
  }
}

export default new AZOSEDevPage();
