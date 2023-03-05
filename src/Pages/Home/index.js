import { React, useState } from "react";
import Powerball from "../../Components/Powerball";
import pb from "../../lib/pb";

const Home = () => {
  var ball1 = 0;

  const handleButtonClick = async (event) => {
    event.preventDefault();
    var results = await pb.GetPowerballDrawings();
    var draws;

    var firstBall = new Array(69);

    for (let index = 0; index < firstBall.length; index++) {
      firstBall[index] = 0;
    }

    if (results.status === "success") {
      draws = results.data;
    } else {
      console.log("Unable to obtain data");
    }
    draws.forEach((draw) => {
      var num = draw.FirstNumber;
      firstBall[num]++;
    });

    /*
        TODO: figure out why ballOne state is not changing.
    */
    var ballVal = 0;
    var ball = 0;
    for (let num = 0; num < firstBall.length; num++) {
      if (firstBall[num] > ballVal) {
        ballVal = firstBall[num];
        ball = num;
        console.log("Ball " + ball + " has been pulled " + ballVal + " times.");
        //ballVal = ball;
      }
    }
    ball1 = ball;
    console.log(ball);
  };

  return (
    <div>
      <Powerball props={ball1}></Powerball>
      <button type="submit" onClick={handleButtonClick}>
        Get Picks
      </button>
    </div>
  );
};

export default Home;
