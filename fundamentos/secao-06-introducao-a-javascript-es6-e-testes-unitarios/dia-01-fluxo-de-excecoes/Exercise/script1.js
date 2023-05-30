const studentRegister = (name, age) => {
  try {
    verifyInputs(name, age);
    verifyAge(age);
  
    return `${name}, seja bem-vindo(a) à AuTrybe!`
  } catch (error) {
    return error.message
  }
}

const verifyInputs = (name, age) => {
  if (!name || !age) {
    throw new Error('Todas as informações são necessárias');
  }
};

const verifyAge = (age) => {
  if (age < 18) {
    throw new Error('Ops, infelizmente nesse momento você não pode fazer as aulas');
  }
};

console.log(studentRegister('Felipe', 18));