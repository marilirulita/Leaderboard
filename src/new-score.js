const newScore = async (name, scr) => {
  const requestURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/0CasFsHb7LOJqeFKBD5E/scores/';

  const method = {
    method: 'POST',
    body: JSON.stringify({
      user: name,
      score: scr,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };
  const request = new Request(requestURL);
  await fetch(request, method);
};

const addNewScore = () => {
  const inputName = document.getElementById('input-name');
  const inputScore = document.getElementById('input-score');

  if (inputName.value !== '' && inputScore.value !== '') {
    newScore(inputName.value, inputScore.value);
    inputName.value = '';
    inputScore.value = '';
  }
};

export { addNewScore as default };