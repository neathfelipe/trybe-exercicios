const { species, hours } = require('../data/zoo_data');

const cronograma = () => Object.keys(hours).reduce((acc, day) => {
  acc[day] = {
    officeHour: hours[day].open === 0 ? 'CLOSED'
      : `Open from ${hours[day].open}am until ${hours[day].close}pm`,
    exhibition: hours[day].open === 0 ? 'The zoo will be closed!'
      : species
        .filter((specie) => specie.availability.includes(day)).map(({ name }) => name),
  };
  return acc;
}, {});

const getSchedule = (scheduleTarget) => {
  if (species.find(({ name }) => name === scheduleTarget)) {
    return species.find(({ name }) => name === scheduleTarget).availability;
  } if (hours[scheduleTarget]) {
    return { [scheduleTarget]: cronograma()[scheduleTarget] };
  }
  return cronograma();
};

module.exports = getSchedule;
