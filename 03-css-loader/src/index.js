import cow from './cow';
import './css/main.css'

const message = 'is great';
document.querySelector('#box').innerText = cow.say(`webpack with babel ${message}!`);