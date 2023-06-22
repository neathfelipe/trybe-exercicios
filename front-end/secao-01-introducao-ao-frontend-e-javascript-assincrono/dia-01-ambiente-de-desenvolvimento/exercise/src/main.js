import validator from 'validator';
import './style.css';

const message = document.querySelector('#answer');
const input = document.querySelector('#value');
const option = document.querySelector('#option');

const btnValidator = document.querySelector('#button');
btnValidator.addEventListener('click', (event) => {
  event.preventDefault();
  const verification = {
    cpf: validator.isTaxID(input.value, 'pt-BR'),
    email: validator.isEmail(input.value),
    hexColor: validator.isHexColor(input.value),
    url: validator.isURL(input.value),
    uppercase: validator.isUppercase(input.value),
  };
  message.innerHTML = `A Validação retornou <span>${verification[option.value]}</span>.`;
  const span = document.querySelector('span');
  if (span.innerHTML === 'true') {
    span.innerHTML = 'verdadeiro';
    span.classList.add('true');
  } else {
    span.innerHTML = 'falso';
    span.classList.add('false');
  }
});
