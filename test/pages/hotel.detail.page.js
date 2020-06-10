import Page from './page';

class HotelDetailPage extends Page {
  get hotelRoomCount() {return $('h3#hotel-rooms-count strong');}

  open() {
    return this;
  }

  getHotelRoomCount() {
    this.hotelRoomCount.waitForExist({ timeout: 20000 });
    return parseInt(this.hotelRoomCount.getText().split(' '));
  }
}

export default new HotelDetailPage();
