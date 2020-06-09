import Page from './page';

class HomePage extends Page {
  

  open() {
    super.open('');
    return this;
  }
}

export default new HomePage();
