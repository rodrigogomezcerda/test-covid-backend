const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./src/graphql/schema/index');
const resolvers = require('./src/graphql/resolvers/resolvers');
const fs = require('fs');
const https = require('https');
const http = require('http');

const configurations = {
  // Note: You may need sudo to run on port 443
  production: { ssl: true, port: 443, hostname: 'wemrchile.com' },
  development: { ssl: false, port: 4000, hostname: 'localhost' },
};

const environment = process.env.NODE_ENV || 'production';
console.log(environment, 'ENTORNO');
const config = configurations[environment];

const apollo = new ApolloServer({
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
const app = express();
apollo.applyMiddleware({ app });

let server;
if (config.ssl) {
  // Assumes certificates are in a .ssl folder off of the package root. Make sure
  // these files are secured.
  server = https.createServer(
    {
      key: fs.readFileSync(`./ssl/wemrchile.key`),
      cert: fs.readFileSync(`./ssl/wemrchile_com_chain.crt`),
    },
    app,
  );
} else {
  server = http.createServer(app);
}
console.log(config, 'CONFIGURACION');
server.listen({ port: config.port }, () =>
  console.log(
    '🚀 Server ready at',
    `http${config.ssl ? 's' : ''}://${config.hostname}:${config.port}${
      apollo.graphqlPath
    }`,
  ),
);

/* server.listen({ port: process.env.PORT }).then(({ url }) => {
  console.log(`🚀 Servidor corriendo en: ${url}`);
}); */
