import React from "react";

const Statistics = (props) => {
  return (
    <>
      <div>
        <h2>{props.name}</h2>
      </div>

      <div>
        <p>
          {props.text}

          {props.value}
        </p>
        <p>
          {props.text} {props.value}
        </p>
        <p>
          {props.text} {props.value}
        </p>
      </div>
    </>
  );
};

export default Statistics;
