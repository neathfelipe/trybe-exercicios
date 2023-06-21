const { species } = require('../data/zoo_data');

const sortForName = (a, b, options) => (options.sorted ? a.localeCompare(b) : 0);

const getAnimalMap = (options = { includeNames: false, sorted: false }) => species
  .reduce((acc, especie) => {
    acc[especie.location] = species
      .filter((animal) => animal.location === especie.location)
      .map((specie) => (options.includeNames ? ({
        [specie.name]: specie.residents
          .filter((resident) => (!options.sex || resident.sex === options.sex))
          .map(({ name }) => name).sort((a, b) => sortForName(a, b, options)),
      }) : specie.name));
    return acc;
  }, {});

module.exports = getAnimalMap;
