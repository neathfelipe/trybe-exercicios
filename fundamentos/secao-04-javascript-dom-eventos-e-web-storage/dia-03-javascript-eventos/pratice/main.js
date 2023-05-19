const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');
// const newElement = tag => document.createElement(tag);

// 1. Copie esse arquivo e edite apenas ele.
// 1.1. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando este for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como é possível fazer isso? Dica: Lembre-se do método `.classList.remove`.
const addTechClass = (event) => {
  const techClass = document.querySelector('.tech');
  techClass.classList.remove('tech');
  event.target.classList.add('tech');
  input.value = '';
}

firstLi.addEventListener('click', addTechClass);
secondLi.addEventListener('click', addTechClass);
thirdLi.addEventListener('click', addTechClass);

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech'.
input.addEventListener('input', (event) => {
  const techClass = document.querySelector('.tech');
  techClass.innerText = event.target.value;
})

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy',
// redirecione para alguma página.
// 4.1. Que tal redirecionar para seu portfólio? Dica: Lembre-se dos métodos `window.location.replace` e `window.open`.
const redirectPage = () => {
  window.open('https://neathfelipe.github.io/', 'blank');
};
myWebpage.addEventListener('dblclick', redirectPage);

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo.
myWebpage.addEventListener('mouseover', (event) => {
  event.target.style.color = 'green';
})

myWebpage.addEventListener('mouseout', (event) => {
  event.target.style.color = 'unset';
});

// Segue abaixo um exemplo de uso do event.target.

function resetText(event) {
  event.target.innerText = 'Opção reiniciada';
}

firstLi.addEventListener('dblclick', resetText);