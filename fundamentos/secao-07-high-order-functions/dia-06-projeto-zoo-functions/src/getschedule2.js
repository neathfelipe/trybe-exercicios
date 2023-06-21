const data = require('../data/zoo_data');

// {
//   Tuesday: { // Dia da semana
//     officeHour: 'Open from 8am until 6pm',
//     exhibition: [ 'lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes' ],
//   },
//   Wednesday: {
//     officeHour: 'Open from 8am until 6pm',
//     exhibition: [ 'tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes' ],
//   },
//   // [...]
// }

const schedule = () => Object.keys(data.hours).reduce((acc, day) => {
  acc[day] = {
    officeHour: 0,
    exhibition: 0,
  };
  return acc;
}, {});

console.log(schedule());
