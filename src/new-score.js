async function newScore(name, scr) {
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
}

export { newScore as default };