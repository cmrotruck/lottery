import { React, useState } from "react";
import pb from "../../lib/pb";

const Powerball = (props) => {
  const [ballOne, setBallOne] = useState(0);
  const [ballTwo, setBallTwo] = useState(0);
  const [ballThree, setBallThree] = useState(0);
  const [ballFour, setBallFour] = useState(0);
  const [ballFive, setBallFive] = useState(0);
  const [pwrBall, setPwrBall] = useState(0);
  const [selected, setSelected] = useState(0);

  const options = ["Get All Draws", "Get Last 10 Draws"];

  function getBall(arr) {
    var ballVal = 0;
    var ball = 0;
    for (let num = 0; num < arr.length; num++) {
      if (arr[num] > ballVal) {
        ballVal = arr[num];
        ball = num;
        //console.log("Ball " + ball + " has been pulled " + ballVal + " times.");
      }
    }
    return ball;
  }

  const handleButtonClick = async (event) => {
    event.preventDefault();
    var results;
    switch (selected) {
      case "Get All Draws":
        results = await pb.GetPowerballDrawings();
        break;
      default:
        results = await pb.GetLast10Draws();
        break;
    }

    var draws;

    var firstBall = new Array(69);
    var secondBall = new Array(69);
    var thirdBall = new Array(69);
    var fourthBall = new Array(69);
    var fifthBall = new Array(69);
    var powerBall = new Array(69);

    // setting all values of firstBall to 0
    for (let index = 0; index < firstBall.length; index++) {
      firstBall[index] = 0;
      secondBall[index] = 0;
      thirdBall[index] = 0;
      fourthBall[index] = 0;
      fifthBall[index] = 0;
      powerBall[index] = 0;
    }

    // check results status, if successful, pull data out of results otherwise
    // alert user that data was not obtained
    if (results.status === "success") {
      draws = results.data;
      //console.log(draws);
    } else {
      console.log("Unable to obtain data");
    }

    // loop through each draw and pull each number
    draws.forEach((draw) => {
      var num1 = draw.FirstNumber;
      var num2 = draw.SecondNumber;
      var num3 = draw.ThirdNumber;
      var num4 = draw.FourthNumber;
      var num5 = draw.FifthNumber;
      var numPb = draw.PowerBall;

      firstBall[num1]++;
      secondBall[num2]++;
      thirdBall[num3]++;
      fourthBall[num4]++;
      fifthBall[num5]++;
      powerBall[numPb]++;
    });

    setBallOne(getBall(firstBall));
    setBallTwo(getBall(secondBall));
    setBallThree(getBall(thirdBall));
    setBallFour(getBall(fourthBall));
    setBallFive(getBall(fifthBall));
    setPwrBall(getBall(powerBall));
  };

  return (
    <div>
      <h2>Ball 1: {ballOne}</h2>
      <h2>Ball 2: {ballTwo}</h2>
      <h2>Ball 3: {ballThree}</h2>
      <h2>Ball 4: {ballFour}</h2>
      <h2>Ball 5: {ballFive}</h2>
      <h2>Powerball: {pwrBall}</h2>
      <label for="options">Choose an option:</label>
      <select
        name="options"
        id="options"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        {options.map((value) => (
          <option value={value} key={value}>
            {value}
          </option>
        ))}
      </select>
      <button type="submit" onClick={handleButtonClick}>
        Get Picks
      </button>
    </div>
  );
};

export default Powerball;
