import { useState } from "react";
import Header from "./component/Header";
import Result from "./component/Result";
import UserInput from "./component/UserInput";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1000,
    expectedReturn: 5,
    duration: 10,
  });

  const isValidInput = userInput.duration >= 1;

  function handleUserInput(investmentType, newValue) {
    setUserInput((previousValue) => {
      return {
        ...previousValue,
        [investmentType]: +newValue,
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleUserInput} />
      {!isValidInput && <p className="center">Please Enter valid duration!</p>}
      {isValidInput && <Result input={userInput} />}
    </>
  );
}

export default App;
