let person = {
  name: 'Roberto',
};

let lastName = {
  lastName: 'Silva',
};

let newPerson = Object.assign({}, person, lastName);
newPerson.name = 'Gilberto';
// console.log(newPerson);
// console.log(person);

let personFelipe = Object.assign({}, person, lastName)
console.log(personFelipe);

personFelipe.name = 'Felipe';
personFelipe.lastName = 'Rodrigues';

console.log(personFelipe);

