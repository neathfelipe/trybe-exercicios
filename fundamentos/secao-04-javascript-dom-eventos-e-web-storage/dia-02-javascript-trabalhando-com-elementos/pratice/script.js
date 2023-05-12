// Acesse o elemento where-are-you.
// Acesse parent a partir de where-are-you e adicione uma color a ele.
// Acesse o first-child-of-child e adicione um texto a ele. Você se lembra dos vídeos da aula anterior? Eles ensinam como fazer isso.
// Acesse o first-child a partir de parent.
// Acesse o first-child a partir de where-are-you.
// Acesse o texto Attention! a partir de where-are-you.
// Acesse o third-child a partir de where-are-you.
// Acesse o third-child a partir de parent.

const whereAreYou = document.getElementById('where-are-you');
whereAreYou.parentNode.style.color = 'purple';
whereAreYou.firstElementChild.innerHTML = 'I am Batman';
whereAreYou.parentNode.firstElementChild.innerHTML = 'You are so Beautiful';
whereAreYou.previousElementSibling.innerHTML = 'We are Venom';
whereAreYou.nextSibling.style.color = 'green';
whereAreYou.nextElementSibling.innerHTML = 'Who are you?';
document.getElementById('parent').firstElementChild.nextElementSibling.nextElementSibling
