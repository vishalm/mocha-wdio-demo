import searchResultPage from '../pages/search.result.page';
import homePage from '../pages/home.page';
import searchHotelPage from '../pages/search.hotel.page';
import hotelDetailPage from '../pages/hotel.detail.page';
const chai = require('chai');
chai.use(require('chai-sorted'));

describe('Hotel Detail', () => {
  Date.prototype.addDays = function(days) { // eslint-disable-line no-extend-native
    this.setDate(this.getDate() + parseInt(days));
    return this;
  };

  const currentDate = new Date();

  function todayDate(date) {
    const d = new Date(date);
    let month = `${d.getMonth() + 1}`;
    let day = `${d.getDate()}`;
    const year = d.getFullYear();

    if (month.length < 2) month = `0${month}`;
    if (day.length < 2) day = `0${day}`;

    return [month, day, year.toString().substring(year.toString().length - 2)].join('-');
  }

  // should show availablility of rooms after selecting a hotel from search results filter by stars
  it('should show availablility of rooms', () => {
    const destinationCity = 'New York, NY';
    const checkInDate = todayDate(currentDate.addDays(2)).toString();
    const checkoutDate = todayDate(currentDate.addDays(4)).toString();
    console.log(checkInDate, checkoutDate);

    homePage
        .open()
        .verifyTextInPage('Search for Flights');

    searchHotelPage
        .open()
        .verifyTextInPage('Search for Hotels');

    // Search for hotels in New York City for dates a month in the future.
    // Filter hotel search results based on 'Star Rating'.
    chai.expect(searchResultPage
        .searchForHotels(destinationCity, checkInDate, checkoutDate)
        .filterByRating()
        .getAllRatings()).to.be.sorted({ descending: true });

    // See available rooms after selecting a hotel from the hotel search results.
    searchResultPage
        .selectFirstResult();

    // Assert Availablity is more then 0 rooms
    expect(hotelDetailPage.getHotelRoomCount() > 0).toBeTruthy();

    utilities.takeScreenshot('StarRating_Availability');
  });
});
