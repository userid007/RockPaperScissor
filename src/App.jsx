import { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/Button";
function App() {
  const [userSelection, setuserSelection] = useState("");
  const [compSelection, setcompSelection] = useState("");
  const [result, setResult] = useState("");
  const options = ["Rock", "Paper", "Scissor"];
  const calculateWinner = (userSelection) => {
    const compSelection = options[Math.floor(Math.random() * 3)];
    setcompSelection(compSelection);
    if (userSelection === compSelection) {
      return "Draw";
    } else if (userSelection === "Rock" && compSelection == "Paper") {
      return "Computer Won";
    } else if (userSelection === "Paper" && compSelection === "Scissor") {
      return "Computer Won";
    } else if (userSelection === "Scissor" && compSelection === "Rock") {
      return "Computer Won";
    } else {
      return "User Won";
    }
  };
  return (
    <div className="App">
      <h2>Select Option</h2>
      {options.map((option, index) => {
        return (
          <Button
            option={option}
            key={index}
            setuserSelection={setuserSelection}
            calculateWinner={calculateWinner}
            setResult={setResult}
          />
        );
      })}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <h2>Comp</h2>
          <h2>{compSelection}</h2>
        </div>
        <div>
          <h2>User</h2>
          <h2>{userSelection}</h2>
        </div>
      </div>
      <h2>{result}</h2>
    </div>
  );
}

export default App;
