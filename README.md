# Test Node Covid19

This project has was created to objetive be a practice of Node.JS and API GraphQl.
The complete project was created with apollo server (API GraphQl).

The main functionalities developed were:

- connection with database MYSQL
- create api graphql countries with the apollo server library

### Tech

This test project uses a number of open source library to work properly:

- [MYSQL](https://www.npmjs.com/package/mysql) - Javascript library
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/) - Apollo Server
- [Nodemon](https://nodemon.io/) - Nodemon

### Installation

- create nodemon.json file and add environment variables:

```sh
{
  "env": {
    "MYSQL_USER": "root",
    "MYSQL_PASSWORD": "",
    "MYSQL_DB": "nameDataBase",
    "PORT": "4000",
    "HOST": "localhost"
  }
}
```

- install dependencias `npm install`

```sh
$ cd test-covid-backend
$ npm install
$ npm start
```

## License

ISC - [More here](https://www.isc.org/licenses/)
