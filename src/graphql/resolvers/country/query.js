const { conexion } = require('../../../config/db');

const listCountries = async () => {
  const connection = await conexion();
  try {
    const [rows] = await connection.execute(
      ` SELECT idCountry, name FROM country`,
    );
    const arrayCountry = rows.map(({ idCountry, name }) => {
      return {
        id: idCountry,
        name,
      };
    });

    return arrayCountry;
  } catch (err) {
    throw err;
  } finally {
    connection.end();
  }
};
module.exports = {
  listCountries,
};
