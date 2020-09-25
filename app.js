const { ApolloServer } = require('apollo-server');
const typeDefs = require('./src/graphql/schema/index');
const resolvers = require('./src/graphql/resolvers/resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
  formatError: (err) => {
    /* if (err.originalError instanceof AuthenticationError) {
    }
    if (err instanceof UserInputError) {
    }
    if (err.originalError instanceof ForbiddenError) {
    }
    if (err instanceof ValidationError) {
    }
    if (err.originalError instanceof SchemaError) {
    }
    if (err.originalError instanceof SyntaxError) {
    }
    if (err.originalError instanceof ApolloError) {
    } */
    return err;
  },
});

server.listen({ port: process.env.PORT }).then(({ url }) => {
  console.log(`🚀 Servidor corriendo en: ${url}`);
});
