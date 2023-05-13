const nowHere = document.getElementById('elementoOndeVoceEsta');
let section = document.createElement('section');
section.innerHTML = 'Venha ser meu amigo';
nowHere.parentElement.appendChild(section);

let paragraph = document.createElement('p');
paragraph.innerHTML = 'Hoje é apenas <b>mais um dia </b>';
nowHere.appendChild(paragraph);

const primeirofilho = document.getElementById('primeiroFilhoDoFilho')
let span = document.createElement('span');
span.innerHTML = 'Desista de me fazer desistir.';
primeirofilho.appendChild(span)

document.querySelector('span').parentElement.parentElement.nextElementSibling