import Page from './page';

class SearchHotelPage extends Page {
  get searchHotelButton() {return $('#search-hotel-button');}
  // get searchHotelButton() {return $('#hotel__guests');}

  get inputDestination() {return $('#inputDestination');}

  open() {
    this.searchHotelButton.waitForExist({ timeout: 20000 });
    this.searchHotelButton.click();
    this.inputDestination.waitForDisplayed({ timeout: 20000 });
    return this;
  }
}

export default new SearchHotelPage();
