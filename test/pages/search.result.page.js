import Page from './page';

class SearchResultPage extends Page {
  get inputDestination() {return $('#inputDestination');}

  get inputCheckInDate() {return $('#inputCheckInDate');}

  get datePickerCalendar() {return $('#datepicker-div');}

  get hotelSearchButton() {return $('#hotelSearchButton');}

  get starRatingFilterLink() {return $('#StarRating');}

  get hotelResultsList() {return $$('.hotelresults-list-container li.js-hotel-result');}

  get getHotelStarsList()
  {return $$('.hotelresults-list-container li.js-hotel-result dl.hotel-results-hotel-info dd:nth-child(4)');} // eslint-disable-line max-len

  get firstHotelInResult() {return $('dl.hotel-results-hotel-info a.hotel-name-title');}

  open() {
    return this;
  }

  searchForHotels(destination, checkInDate, checkoutDate) {
    this.inputDestination.setValue(destination);
    this.inputCheckInDate.click();
    this.datePickerCalendar.waitForDisplayed({ timeout: 20000 });
    $(`#jd-${checkInDate}`).click();
    $(`#jd-${checkoutDate}`).click();
    this.hotelSearchButton.click();
    return this;
  }

  filterByRating() {
    this.starRatingFilterLink.click();
    return this;
  }

  getAllRatings() {
    // Drity wait for page sorting complete
    browser.pause(5000);
    const starsCollection = [];
    this.getHotelStarsList.forEach(function(stars) {
      starsCollection.push(parseInt(stars.getAttribute('title').charAt(0)));
    });
    return starsCollection;
  }

  selectFirstResult() {
    this.firstHotelInResult.click();
  }
}

export default new SearchResultPage();
