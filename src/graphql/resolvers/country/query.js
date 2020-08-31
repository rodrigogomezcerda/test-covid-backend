const { conexion } = require('../../../config/db');

const listCountries = async () => {
  const connection = await conexion();
  try {
    const [rows] = await connection.execute(
      ` SELECT idCountry, name, flag FROM country`,
    );
    const arrayCountry = rows.map((data) => {
      return {
        ...data,
        id: data.idCountry,
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
