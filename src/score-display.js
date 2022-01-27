async function getAllScores() {
  const requestURL =
    "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/5U9DAd6aBCpR2Ki3cv7X/scores/";
  const request = new Request(requestURL);
  const response = await fetch(request);
  const players = await response.json();

  displayScores(players);
}

const displayScores = (obj) => {
  const board = document.getElementById('scores');
  board.innerHTML = '';
  const playersInfo = obj["result"];

  playersInfo.forEach((player) => {
    const item = document.createElement('li');
    item.innerHTML = `<p>${player.user}: ${player.score}</p>`;
    board.appendChild(item);
  });
};

export { getAllScores as default };