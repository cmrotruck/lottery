import React from "react";

const Powerball = (props) => {
  const { ballOne } = props;
  return (
    <div>
      <h2>Ball 1: {ballOne}</h2>
      <h2>Ball 2: </h2>
      <h2>Ball 3: </h2>
      <h2>Ball 4: </h2>
      <h2>Ball 5: </h2>
      <h2>Powerball: </h2>
    </div>
  );
};

export default Powerball;
