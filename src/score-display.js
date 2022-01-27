const displayScores = (obj) => {
  const board = document.getElementById('scores');
  board.innerHTML = '';
  const playersInfo = obj.result;

  playersInfo.forEach((player) => {
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

  displayScores(players);
};

export { getAllScores as default };