import searchResultPage from '../pages/search.result.page';
import homePage from '../pages/home.page';


describe('Search Result Page Suite', function() {
  it('should available show rooms after selecting a hotel from the hotel search results', function() {
    let destinationCity = "New York";
    
    homePage
        .open()
        .verifyTextInPage('Search for Flights');
    // searchResultPage.searchForHotels(destinationCity, toDate, fromDate)
    // utilities.takeScreenshot('homepage');
  });
});