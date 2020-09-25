const { conexion } = require('../../../config/db');

const listCountries = async () => {
  const connection = await conexion();
  try {
    const [rows] = await connection.execute(
      ` SELECT id_country, name, flag FROM country`,
    );
    const arrayCountry = rows.map((data) => {
      return {
        ...data,
        id: data.id_country,
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
