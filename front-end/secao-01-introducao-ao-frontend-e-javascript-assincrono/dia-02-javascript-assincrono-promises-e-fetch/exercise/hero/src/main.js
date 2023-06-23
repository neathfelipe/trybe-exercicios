import './style.css';

const btnGenerate = document.querySelector('.btn');
const img = document.querySelector('img');

btnGenerate.addEventListener('click', () => {
  fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
  .then((response) => response.json())
  .then((data) => console.log(data))
})