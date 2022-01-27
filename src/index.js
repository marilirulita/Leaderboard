import './style.css';
import getAllScores from './score-display.js';

const refresh = document.getElementById('refresh');
refresh.addEventListener('click', () => {getAllScores()});


// window.onload {
//   getAllScores();
// };