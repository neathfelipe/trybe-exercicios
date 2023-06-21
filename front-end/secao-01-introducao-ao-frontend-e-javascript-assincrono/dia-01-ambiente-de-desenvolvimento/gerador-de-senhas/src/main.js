import { nanoid } from 'nanoid';
import copy from 'clipboard-copy';
import './style.css';

const buttonPassword = document.querySelector('button');
const displayPassword = document.querySelector('h2');

buttonPassword.addEventListener('click', () => {
  displayPassword.innerHTML = nanoid();
  copy(displayPassword.innerHTML);
});
