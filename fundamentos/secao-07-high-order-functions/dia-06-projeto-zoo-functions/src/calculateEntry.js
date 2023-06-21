const { prices } = require('../data/zoo_data');

const countEntrants = (entrants) => entrants
  .reduce((acc, pessoa) => {
    if (pessoa.age < 18) acc.child += 1;
    if (pessoa.age >= 18 && pessoa.age < 50) acc.adult += 1;
    if (pessoa.age >= 50) acc.senior += 1;
    return acc;
  }, { adult: 0, child: 0, senior: 0 });

const calculateEntry = (entrants) => {
  if (!entrants || entrants.length === 0) return 0;
  return Object.keys(countEntrants(entrants))
    .reduce((acc, pessoa) => acc + countEntrants(entrants)[pessoa] * prices[pessoa], 0);
};

module.exports = { calculateEntry, countEntrants };
