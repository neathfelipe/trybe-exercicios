import Swal from 'sweetalert2';

const BASE_URL = 'https://api.exchangerate.host/latest?base=';
const getButtton = document.querySelector('button');
const getInput = document.querySelector('input');
const getListaMoedas = document.querySelector('#listaMoedas');
const getTitle = document.querySelector('h3');
const getMoedas = document.querySelector('#moeda');

const createCurrency = (data) => {
  const decimalPlaces = 3;
  Object.keys(data.rates).forEach((moedas) => {
    const currency = document.createElement('li');
    currency.classList.add('currency');
    currency.innerHTML = `
        <h4><img src="./src/images/coins-svgrepo-com 1.png" alt="coin"> ${moedas}</h4>
        <p>${data.rates[moedas].toFixed(decimalPlaces)}</p>
    `;
    getListaMoedas.appendChild(currency);
  });
};

getButtton.addEventListener('click', () => {
  getListaMoedas.innerHTML = '';
  const inputValue = getInput.value.toUpperCase();
  const url = `${BASE_URL}${inputValue}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (Object.keys(data.rates).includes(inputValue)) {
        getTitle.classList.remove('invisible');
        getMoedas.innerText = inputValue;
        createCurrency(data);
      } else if (inputValue === '') {
        throw new Error('Você precisa passar uma moeda');
      } else {
        throw new Error('Moeda não encontrada');
      }
    })
    .catch((error) => Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: `${error.message}`,
    }));
});
