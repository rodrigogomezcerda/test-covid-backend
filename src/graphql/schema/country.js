const type = `
	type Country {
		id: Int
		name: String
	}
`;
const query = `
  listCountries: [Country]!
`;
module.exports = {
  type,
  query,
};
