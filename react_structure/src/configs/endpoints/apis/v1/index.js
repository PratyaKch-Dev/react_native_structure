import urljoin from 'url-join';
// ---
export default endpoint => ({
  // HOTEL
  HOTEL_DEALS: urljoin(endpoint, 'api', 'deals', 'hotelDeals'),
});
