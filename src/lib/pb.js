function GetPowerballDrawings() {
  // get powerball drawings from powerball api
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "7a3bbb4a75msh027520d2b0cd076p1e2befjsn318461451384",
      "X-RapidAPI-Host": "powerball.p.rapidapi.com",
    },
  };

  return fetch("https://powerball.p.rapidapi.com/", options)
    .then((response) => response.json())
    .catch((err) => console.error(err));
}

function GetLast10Draws() {
  //gets the last 10 draws from powerball api
  const options = {
    method: "Get",
    headers: {
      "X-RapidAPI-Key": "7a3bbb4a75msh027520d2b0cd076p1e2befjsn318461451384",
      "X-RapidAPI-Host": "powerball.p.rapidapi.com",
    },
  };

  return fetch("https://powerball.p.rapidapi.com/Latest10", options)
    .then((response) => response.json())
    .catch((err) => console.log(err));
}

function GetLatestDrawing() {
  //gets the last 10 draws from powerball api
  const options = {
    method: "Get",
    headers: {
      "X-RapidAPI-Key": "7a3bbb4a75msh027520d2b0cd076p1e2befjsn318461451384",
      "X-RapidAPI-Host": "powerball.p.rapidapi.com",
    },
  };

  return fetch("https://powerball.p.rapidapi.com/latest", options)
    .then((response) => response.json())
    .catch((err) => console.log(err));
}

module.exports = {
  GetPowerballDrawings,
  GetLast10Draws,
  GetLatestDrawing,
};
