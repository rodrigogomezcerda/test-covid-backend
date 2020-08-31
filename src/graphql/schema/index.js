const { gql } = require('apollo-server');

const country = require('./country');

const typeDefs = gql`
  ${country.type}

  type RootQuery {
    ${country.query}
  }

  schema {
    query: RootQuery
  }
`;

module.exports = typeDefs;
