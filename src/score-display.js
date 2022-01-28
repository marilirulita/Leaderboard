const displayScores = (arr) => {
  const players = arr.sort((a, b) => b.score - a.score);
  const board = document.getElementById('scores');
  board.innerHTML = '';

  players.forEach((player) => {
    const item = document.createElement('li');
    item.innerHTML = `<p>${player.user}: ${player.score}</p>`;
    board.appendChild(item);
  });
};

const getAllScores = async () => {
  const requestURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/0CasFsHb7LOJqeFKBD5E/scores/';
  const request = new Request(requestURL);
  const response = await fetch(request);
  const players = await response.json();
  const playersInfo = players.result;

  displayScores(playersInfo);
};

export { getAllScores as default };