import './style.css';
import getAllScores from './score-display.js';
import newScore from './new-score.js';

const refresh = document.getElementById('refresh');
refresh.addEventListener('click', () => getAllScores());

const inputName = document.getElementById('input-name');
const inputScore = document.getElementById('input-score');
const submit = document.getElementById('submit');
submit.addEventListener('click', () => {
  if (inputName.value !== '' && inputScore.value !== '') {
    newScore(inputName.value, inputScore.value);
    inputName.value = '';
    inputScore.value = '';
  }
});

window.onload = () => getAllScores();
