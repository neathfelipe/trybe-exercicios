const { species } = require('../data/zoo_data');

const countAnimals = (animals) => {
  if (!animals) {
    return species.reduce((acc, { name, residents }) => {
      acc[name] = residents.length;
      return acc;
    }, {});
  }

  if (!animals.sex) {
    return species.find(({ name }) => name === animals.species).residents.length;
  } return species.find(({ name }) => name === animals.species).residents
    .filter(({ sex }) => sex === animals.sex).length;
};

module.exports = countAnimals;
