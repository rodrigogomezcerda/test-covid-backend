const queryCountry = require('./country/callQuery');

module.exports = {
  listCountries: queryCountry.listCountries,
};
