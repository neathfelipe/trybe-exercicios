const { species } = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => species
  .find(({ name }) => animal === name).residents
  .every((animais) => animais.age >= age);

module.exports = getAnimalsOlderThan;
