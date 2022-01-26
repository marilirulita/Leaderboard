const scores = [
  { name: 'Name', score: 100 },
  { name: 'Name', score: 50 },
  { name: 'Name', score: 20 },
  { name: 'Name', score: 78 },
  { name: 'Name', score: 43 },
];

const board = document.getElementById('scores');

const displayScores = () => {
  scores.forEach((scr) => {
    const item = document.createElement('li');
    item.innerHTML = `<p>${scr.name}: ${scr.score}</p>`;
    board.appendChild(item);
  });
};

export { displayScores as default };