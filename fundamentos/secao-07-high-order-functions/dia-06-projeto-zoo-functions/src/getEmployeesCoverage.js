const { employees, species } = require('../data/zoo_data');

const createInfo = () => employees.map(({ id, firstName, lastName, responsibleFor }) => ({
  id,
  fullName: `${firstName} ${lastName}`,
  species: responsibleFor
    .map((idAnimals) => species.find((specie) => specie.id === idAnimals))
    .map(({ name }) => name),
  locations: species
    .filter((specie) => responsibleFor.includes(specie.id))
    .map((specie) => specie.location),
}));

const getEmployeesCoverage = (objParametro) => {
  if (!objParametro) {
    return createInfo();
  }
  if (createInfo().find(({ fullName }) => fullName.includes(objParametro.name))) {
    return createInfo().find(({ fullName }) => fullName.includes(objParametro.name));
  }
  if (createInfo().find(({ id }) => id === objParametro.id)) {
    return createInfo().find(({ id }) => id === objParametro.id);
  }
  throw new Error('Informações inválidas');
};

module.exports = getEmployeesCoverage;
