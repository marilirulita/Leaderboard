async function newScore(name, scr) {
  const requestURL =
    "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/5U9DAd6aBCpR2Ki3cv7X/scores/";

  const method = {
        method: 'POST',
        body: JSON.stringify({
          user: name, score: scr,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      };
  const request = new Request(requestURL);
  const response = await fetch(request, method);
  
  const playersText = await response.text();
  const players = JSON.parse(playersText);

 // const players = await response.json();
}

export {newScore as default};