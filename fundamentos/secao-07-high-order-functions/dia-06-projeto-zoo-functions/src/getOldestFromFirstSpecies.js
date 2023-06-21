const { employees, species } = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => Object.values(species
  .find((specie) => specie.id === employees
    .find((employee) => employee.id === id).responsibleFor[0]).residents
  .sort((b, a) => a.age - b.age)[0]);

module.exports = getOldestFromFirstSpecies;
