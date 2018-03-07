import cow from './cow';
import './sass/main.scss'

const message = 'is awesome';
document.querySelector('#box').innerText = cow.say(`webpack with babel and sass ${message}!`);