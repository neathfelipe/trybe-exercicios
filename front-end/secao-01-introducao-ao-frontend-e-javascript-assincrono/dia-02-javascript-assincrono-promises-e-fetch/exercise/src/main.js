import './style.css';

const nome = document.getElementById('name');
const fullName = document.getElementById('fullName');
const message = document.getElementById('message');
const btnGenerate = document.querySelector('.btnGenerate');
const img = document.querySelector('img');
const inputAnswer = document.querySelector('input');
const btnAnswer = document.querySelector('.btnAnswer');
const messageDiv = document.querySelector('.message');

const generateIdRandom = () => {
  return Math.floor(Math.random() * 563);
};

const removeInvisible = (element) => {
  element.classList.remove('invisible');
};
const addInvisible = (element) => {
  element.classList.add('invisible');
};

btnGenerate.addEventListener('click', () => {
  const numberRandom = generateIdRandom();
  addInvisible(messageDiv);
  addInvisible(nome);
  addInvisible(fullName);
  inputAnswer.value = '';
  fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
    .then((response) => response.json())
    .then((data) => {
      const dataInfo = data[numberRandom];
      if (dataInfo) {
        if (dataInfo.biography['fullName'].length === 0) {
          fullName.innerHTML = `<strong>Fullname</strong>: ${dataInfo.name} <br> <strong>Alter Egos</strong>: ${dataInfo.biography.alterEgos}`;
        } else {
          fullName.innerHTML = `<strong>Fullname</strong>: ${dataInfo.biography['fullName']} <br> <strong>Alter Egos</strong>: ${dataInfo.biography.alterEgos} `;
        }
        img.src = dataInfo.images['md'],
        nome.innerHTML = dataInfo.name,
        removeInvisible(img);
        removeInvisible(inputAnswer);
      } else {
        throw new Error('Database error, click again');
      }
    })
    .catch((error) => {
      message.innerHTML = error.message;
      removeInvisible(messageDiv);
      message.classList.remove('invisible');
    });
});

inputAnswer.addEventListener('keyup', (e) =>{
  if (e.keyCode === 13) {
    btnAnswer.click();
  }
});
  
btnAnswer.addEventListener('click', () => {
  message.innerHTML = '';
  removeInvisible(messageDiv);
  removeInvisible(message);
  const inputValue = inputAnswer.value.toLowerCase();
  fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
    .then((response) => response.json())
    .then((data) => { 
      const hero = data.find(({ name }) => name === nome.innerText);
      if ((hero.name.toLowerCase().includes(inputValue) || hero.biography['fullName'].toLowerCase().includes(inputValue)) && inputValue.length > 3) {
        addInvisible(inputAnswer);
        message.innerHTML = ' <img src="https://www.svgrepo.com/show/207509/checked-tick.svg" alt="correct" srcset="">Congratulations, you got it right!';
        removeInvisible(nome);
        removeInvisible(fullName);
      } else if (inputValue.length <= 2) {
        message.innerHTML = '<img src="https://www.svgrepo.com/show/207510/cancel.svg" alt="error" srcset=""> Enter at least 3 letters';
      } else {
        message.innerHTML = '<img src="https://www.svgrepo.com/show/207510/cancel.svg" alt="error" srcset=""> Sorry you made a mistake, please try again.';
      }
    });
});