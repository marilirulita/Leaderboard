import './style.css';
import getAllScores from './score-display.js';
import addNewScore from './new-score.js';

const refresh = document.getElementById('refresh');
refresh.addEventListener('click', () => getAllScores());

const submit = document.getElementById('submit');
submit.addEventListener('click', () => addNewScore());

window.onload = () => getAllScores();
