const textParagraph = document.querySelectorAll('p');
textParagraph[1].innerHTML = 'Daqui a dois anos, me vejo como um desenvolvedor altamente qualificado e experiente, capaz de criar soluções inovadoras para problemas complexos. Eu espero ter me aprofundado em várias tecnologias e frameworks, como React, Node.js, e Python, e ter adquirido conhecimento em áreas como inteligência artificial, segurança cibernética e computação em nuvem.'

const mainContent = document.querySelector('.main-content');
mainContent.style.backgroundColor = 'rgb(76, 164, 109)'

const mainContentRed = document.querySelector('.center-content');
mainContentRed.style.backgroundColor = 'white'

const title = document.querySelector('h1');
title.innerText = 'Desafio - JavaScript'

const firstParagraphUppercase = () => {
  let firstP = document.getElementsByTagName('p')[0];
  firstP.innerHTML = firstP.innerHTML.toUpperCase()
}
firstParagraphUppercase();

const exibitionContent = () => {
  let exibitionContent = document.querySelectorAll('p');
  let textParagraph = ''
  for (let index = 0; index < exibitionContent.length - 1; index += 1) {
    textParagraph += exibitionContent[index].innerText + ' ';
  }
  document.getElementsByTagName('p')[3].innerText = textParagraph
}
exibitionContent();