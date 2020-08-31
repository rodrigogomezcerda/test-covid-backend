const resolverFunction = require('./query');

const listCountries = async (_, {}) => {
  return resolverFunction.listCountries();
};
module.exports = {
  listCountries,
};
