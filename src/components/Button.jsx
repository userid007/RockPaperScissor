import React from "react";

const Button = ({
  option,
  index,
  setuserSelection,
  calculateWinner,
  setResult,
}) => {
  const handleClick = () => {
    setuserSelection(option);
    setResult(calculateWinner(option));
  };
  return (
    <button className="button" key={index} onClick={handleClick}>
      {option}
    </button>
  );
};

export default Button;
