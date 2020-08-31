const type = `
	type Country {
		id: Int
		name: String
		flag: String
	}
`;
const query = `
  listCountries: [Country]!
`;
module.exports = {
  type,
  query,
};
